import { GroomerByCity } from '@/types/places'
import Link from 'next/link'
import { buttonHoverTransition } from '@/design/constants'
import { classNames } from '@/utils/classNames'

export const GroomerItem = ({
  groomer,
  groomersCount,
  index,
}: {
  groomer: GroomerByCity
  groomersCount: number
  index: number
}) => {
  return (
    <Link
      key={groomer.id}
      href={`/toiletteur/${groomer.id}`}
      className={classNames(
        buttonHoverTransition,
        index === 0 ? 'rounded-t-xl' : '',
        index === groomersCount - 1 ? 'rounded-b-xl' : '',
        'grid grid-cols-1 p-4 hover:bg-slate-200 md:grid-cols-7'
      )}
    >
      <p className="col-span-3 font-bold uppercase">{groomer.name}</p>
      <p>{groomer.rating ? `${groomer.rating} ⭐️` : ''} </p>
      <p className="col-span-3">{groomer.formattedAddress}</p>
    </Link>
  )
}
