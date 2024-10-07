import { OpeningHour } from '@/types/places'

const dayNumberToDayMapper: Record<number, string> = {
  0: 'dimanche',
  1: 'lundi',
  2: 'mardi',
  3: 'mercredi',
  4: 'jeudi',
  5: 'vendredi',
  6: 'samedi',
}

export const DisplayOpeningHours = ({
  openingHours,
}: {
  openingHours: OpeningHour[]
}) => {
  return (
    <div className="rounded-xl border-[1px] border-stone-300 bg-white p-8 shadow-lg">
      <p className="text-2xl font-extrabold leading-none tracking-tight">
        Horaires d'ouverture
      </p>

      <div className="mt-4 space-y-2">
        {openingHours.map((hour) => (
          <div
            key={`${hour.day}`}
            className="flex items-center justify-between"
          >
            <p className="capitalize">{dayNumberToDayMapper[hour.day]}</p>
            <div className="flex items-center justify-end gap-2">
              <p>
                {hour.startHour.toString().padStart(2, '0')}:
                {hour.startMinute.toString().padStart(2, '0')}
              </p>
              <p>-</p>
              <p>
                {hour.closeHour.toString().padStart(2, '0')}:
                {hour.closeMinute.toString().padStart(2, '0')}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
