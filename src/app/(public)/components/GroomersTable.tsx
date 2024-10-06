import { Filters } from './Filters'
import { GroomerByCity } from '@/types/places'
import { GroomerItem } from './GroomerItem'

export const GroomersTable = ({
  groomers,
  city,
}: {
  groomers: GroomerByCity[]
  city: string
}) => {
  return (
    <div>
      <Filters city={city} />

      <div className="mt-8 divide-y-[1px] divide-stone-300 rounded-xl border-[1px] border-stone-300 shadow-lg">
        {groomers.map((groomer, index) => (
          <GroomerItem
            groomer={groomer}
            groomersCount={groomers.length}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}
