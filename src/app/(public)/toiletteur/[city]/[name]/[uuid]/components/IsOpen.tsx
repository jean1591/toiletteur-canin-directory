import { OpeningHour } from '@/types/places'
import { getPlaceStatus } from '@/utils/getPlaceStatus'

export const IsOpen = ({ openingHours }: { openingHours: OpeningHour[] }) => {
  const today = new Date()
  const todayOpeningHours = openingHours.find(
    (hour) => hour.day === today.getDay()
  )

  if (!todayOpeningHours) {
    return
  }

  const placeStatus = getPlaceStatus(todayOpeningHours)

  if (placeStatus === 'closed') {
    return (
      <p className="rounded-md border-[1px] border-red-900 bg-red-100 px-2 py-1 text-sm leading-none tracking-tight">
        Fermé
      </p>
    )
  }

  if (placeStatus === 'open') {
    return (
      <p className="rounded-md border-[1px] border-green-900 bg-green-100 px-2 py-1 text-sm leading-none tracking-tight">
        Ouvert
      </p>
    )
  }

  if (placeStatus === 'openingSoon') {
    return (
      <p className="rounded-md border-[1px] border-green-900 bg-green-100 px-2 py-1 text-sm leading-none tracking-tight">
        Ouvre bientôt
      </p>
    )
  }
}
