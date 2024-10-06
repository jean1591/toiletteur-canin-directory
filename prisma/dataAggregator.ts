import * as dotenv from 'dotenv'

import { OpeningHour, Place, PrismaClient, Review } from '@prisma/client'

import cuid from 'cuid'

dotenv.config()

const prisma = new PrismaClient()

async function main() {
  const baseUrl = 'https://places.googleapis.com/v1/places:searchText'
  const apiKey = process.env.GOOGLE_API_KEY
  const query = 'toiletteur canin in Paris'

  const params = new URLSearchParams({
    key: apiKey || '',
    fields:
      'places.businessStatus,places.formattedAddress,places.googleMapsUri,places.id,places.internationalPhoneNumber,places.rating,places.shortFormattedAddress,places.userRatingCount,places.websiteUri,places.displayName,places.currentOpeningHours,places.reviews,nextPageToken',
    languageCode: 'fr',
  })

  const data = {
    textQuery: query,
  }

  let count = 0
  let nextPageToken: string | null = null

  while (true) {
    console.log(`Fetching page ${count}`)

    const response = await fetch(`${baseUrl}?${params.toString()}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      console.error('Error fetching data:', response.statusText)
      break
    }

    const jsonResponse = await response.json()
    const places = jsonResponse.places || []

    const placesData: Place[] = []
    const openingHoursData: OpeningHour[] = []
    const reviewsData: Review[] = []

    for (const result of places) {
      try {
        const place: Place = {
          id: cuid(),
          businessStatus: result.businessStatus || null,
          city: result.shortFormattedAddress
            .split(',')
            .pop()
            ?.trim()
            .toLowerCase(),
          formattedAddress: result.formattedAddress,
          googleId: result.id || null,
          googleMapsUri: result.googleMapsUri || null,
          internationalPhoneNumber: result.internationalPhoneNumber || null,
          name: result.displayName?.text,
          rating: result.rating || null,
          userRatingCount: result.userRatingCount || null,
          websiteUri: result.websiteUri || null,
        }

        placesData.push(place)

        // Opening hours
        const currentOpeningHours = result.currentOpeningHours
        if (currentOpeningHours && currentOpeningHours.periods) {
          for (const period of currentOpeningHours.periods) {
            const openingHour: OpeningHour = {
              id: cuid(),
              closeHour: period.close.hour,
              closeMinute: period.close.minute,
              day: period.open.day,
              startHour: period.open.hour,
              startMinute: period.open.minute,
              placeId: place.id,
            }
            openingHoursData.push(openingHour)
          }
        }

        // Reviews
        const gReviews = result.reviews || []
        for (const review of gReviews) {
          const reviewData: Review = {
            id: cuid(),
            authorName: review.authorAttribution.displayName,
            authorPhotoUri: review.authorAttribution.photoUri || null,
            publishedAt: new Date(review.publishTime),
            rating: review.rating,
            text: review.text?.text || null,
            placeId: place.id,
          }
          reviewsData.push(reviewData)
        }
      } catch (error) {
        console.error(error)
        console.info(JSON.stringify(result))
      }
    }

    await prisma.place.createMany({ data: placesData })
    await prisma.openingHour.createMany({ data: openingHoursData })
    await prisma.review.createMany({ data: reviewsData })

    nextPageToken = jsonResponse.nextPageToken

    if (nextPageToken) {
      console.log(`>> nextPageToken found - ${count} --> ${count + 1}`)
      params.set('pageToken', nextPageToken)
    } else {
      break
    }

    count++
  }

  console.log('Data seeded successfully.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
