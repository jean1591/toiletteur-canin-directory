import { OpeningHour } from '@/types/places'

export const getPlaceStatus = (
  openingHours: OpeningHour
): 'closed' | 'open' | 'openingSoon' => {
  const now = new Date()
  const currentDay = now.getDay()
  const currentHour = now.getHours()
  const currentMinute = now.getMinutes()

  const { closeHour, closeMinute, day, startHour, startMinute } = openingHours

  if (currentDay !== day) {
    return 'closed'
  }

  if (
    currentHour < startHour ||
    (currentHour === startHour && currentMinute < startMinute)
  ) {
    const minutesUntilOpen =
      (startHour - currentHour) * 60 + (startMinute - currentMinute)
    if (minutesUntilOpen <= 30) {
      return 'openingSoon'
    }
    return 'closed'
  }

  if (
    (currentHour > startHour ||
      (currentHour === startHour && currentMinute >= startMinute)) &&
    (currentHour < closeHour ||
      (currentHour === closeHour && currentMinute < closeMinute))
  ) {
    return 'open'
  }

  return 'closed'
}
