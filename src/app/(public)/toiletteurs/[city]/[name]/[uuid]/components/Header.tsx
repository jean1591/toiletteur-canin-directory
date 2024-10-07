import { Groomer } from '@/types/places'
import { IsOpen } from './IsOpen'
import Link from 'next/link'
import { buttonHoverTransition } from '@/design/constants'
import { classNames } from '@/utils/classNames'

export const Header = ({ groomer }: { groomer: Groomer }) => {
  const {
    formattedAddress,
    googleMapsUri,
    internationalPhoneNumber,
    name,
    openingHours,
    rating,
    userRatingCount,
  } = groomer

  return (
    <div className="rounded-xl border-[1px] border-stone-300 bg-white p-8 shadow-lg">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center justify-start gap-4">
          <p className="text-2xl font-extrabold leading-none tracking-tight">
            {name}
          </p>
          <IsOpen openingHours={openingHours} />
        </div>
        <div className="flex items-center justify-end gap-2">
          <p className="text-2xl font-bold">{rating} ⭐️</p>
          <p className="text-slate-600text-sm">({userRatingCount} avis)</p>
        </div>
      </div>

      {internationalPhoneNumber && (
        <p className="mt-2 leading-none tracking-tight text-slate-600">
          {internationalPhoneNumber}
        </p>
      )}

      <div className="mt-8 flex items-center justify-between gap-4">
        <p className="leading-none tracking-tight text-slate-600">
          {formattedAddress}
        </p>
        <div>
          {googleMapsUri && (
            <Link
              href={googleMapsUri}
              target="_blank"
              className={classNames(
                buttonHoverTransition,
                'rounded-md bg-stone-500 px-4 py-2 font-bold text-white hover:bg-stone-600'
              )}
            >
              Show on Google Maps
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
