import { GroomerByCity } from '@/types/places'
import Link from 'next/link'
import { buttonHoverTransition } from '@/design/constants'
import { classNames } from '@/utils/classNames'
import { createSlug } from '@/utils/createSlug'

export const GroomerItem = ({
  city,
  groomer,
  groomersCount,
  index,
}: {
  city: string
  groomer: GroomerByCity
  groomersCount: number
  index: number
}) => {
  return (
    <Link
      key={groomer.id}
      href={`/toiletteur-a-${createSlug(city)}/${createSlug(groomer.name)}/${groomer.id}`}
      className={classNames(
        buttonHoverTransition,
        index === 0 ? 'rounded-t-xl' : '',
        index === groomersCount - 1 ? 'rounded-b-xl' : '',
        'grid grid-cols-1 bg-white p-4 hover:bg-stone-100 md:grid-cols-7'
      )}
    >
      <p className="col-span-3 font-bold capitalize">
        {groomer.name.toLowerCase()}
      </p>
      {groomer.rating && (
        <div className="flex items-center justify-center gap-2">
          <p>{`${groomer.rating} ⭐️`} </p>
          {groomer.userRatingCount && (
            <p className="text-xs text-slate-600">{`(${groomer.userRatingCount})`}</p>
          )}
        </div>
      )}
      <p className="col-span-3">{groomer.formattedAddress}</p>
    </Link>
  )
}
