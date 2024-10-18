import { BreadCrumbs } from '@/app/(public)/components/BreadCrumbs'
import { DisplayOpeningHours } from './components/DisplayOpeningHours'
import { DisplayReviews } from './components/DisplayReviews'
import { GroomerDto } from '@/app/api/groomers/[uuid]/route'
import { Header } from './components/Header'
import { Metadata } from 'next'
import { fetchDataFromApi } from '@/utils/fetchDataFromApi'
import { metadata } from '@/app/layout'
import { slugify } from '@/utils/slugify'

interface Props {
  params: { city: string; name: string; uuid: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await fetchDataFromApi<GroomerDto>(`api/groomers/${params.uuid}`)
  const { groomer } = data

  const { city, id, name, rating, userRatingCount } = groomer

  const canonicalUrl = `${process.env.NEXT_PUBLIC_URL}/toiletteur-a-${city}/${slugify(name)}/${params.uuid}`

  return {
    ...metadata,
    title: `${params.name} - Salon de Toilettage`,
    description: `Découvrez ${name}, un salon de toilettage pour chiens situé à ${city}. Avec une note de ${rating} basée sur ${userRatingCount} avis.`,
    keywords: [
      `toilettage chiens ${city}`,
      `toiletteur à ${city}`,
      `avis ${name} à ${city}`,
    ],
    alternates: {
      canonical: canonicalUrl,
    },
  }
}

export default async function GroomerPage({ params }: Props) {
  const data = await fetchDataFromApi<GroomerDto>(`api/groomers/${params.uuid}`)
  const { groomer } = data
  const { openingHours, reviews } = groomer

  const links = [
    { label: 'accueil', url: '/' },
    {
      label: `Toiletteurs à ${params.city}`,
      url: `/toiletteur-a-${params.city}`,
    },
  ]

  return (
    <div className="space-y-8">
      <BreadCrumbs city={params.city} links={links} />

      <Header groomer={groomer} />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <DisplayOpeningHours openingHours={openingHours} />
        </div>
        <div>
          <DisplayReviews reviews={reviews} />
        </div>
      </div>
    </div>
  )
}
