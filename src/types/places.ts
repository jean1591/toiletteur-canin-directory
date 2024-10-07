export interface City {
  averageRating: number
  name: string
  numberOfPlaces: number
}

export interface GroomerByCity {
  id: string
  formattedAddress: string
  name: string
  rating: number | null
}

export interface Groomer {
  id: string
  businessStatus: string | null
  city: string
  formattedAddress: string
  googleMapsUri: string | null
  internationalPhoneNumber: string | null
  name: string
  openingHours: OpeningHour[]
  rating: number | null
  reviews: Review[]
  userRatingCount: number | null
  websiteUri: string | null
}

export interface OpeningHour {
  closeHour: number
  closeMinute: number
  day: number
  startHour: number
  startMinute: number
}

export interface Review {
  authorName: string
  authorPhotoUri: string | null
  publishedAt: Date
  rating: number | null
  text: string | null
}
