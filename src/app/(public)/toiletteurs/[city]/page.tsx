// TODO: récupérer les toiletteurs par ville
// TODO: Faire un lien vers top 5
// TODO: créer page meilleurs-toiletteurs-a-[city]

import { GroomersByCityDto } from '@/app/api/groomers/cities/[city]/route'
import Link from 'next/link'
import { buttonHoverTransition } from '@/design/constants'
import { classNames } from '@/utils/classNames'
import { fetchDataFromApi } from '@/utils/fetchDataFromApi'

export default async function CityPage({
  params,
}: {
  params: { city: string }
}) {
  const data = await fetchDataFromApi<GroomersByCityDto>(
    `api/groomers/cities/${params.city}`
  )
  const { groomers } = data

  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          Les {groomers.length} toiletteurs à{' '}
          <span className="capitalize">{params.city}</span>
        </h1>
        <h2 className="mt-4 text-xl text-gray-700">
          Trouver le toiletteur parfait pour votre animal à{' '}
          <span className="capitalize">{params.city}</span>
        </h2>
      </div>

      <div className="mt-20 divide-y-2 rounded-xl border-[1px] border-slate-950">
        {groomers.map((groomer, index) => (
          <Link
            key={groomer.id}
            href={`/toiletteur/${groomer.id}`}
            className={classNames(
              buttonHoverTransition,
              index === 0 ? 'rounded-t-xl' : '',
              index === groomers.length - 1 ? 'rounded-b-xl' : '',
              'grid grid-cols-1 p-4 hover:bg-slate-200 md:grid-cols-7'
            )}
          >
            <p className="col-span-3 font-bold uppercase">{groomer.name}</p>
            <p>{groomer.rating ? `${groomer.rating} ⭐️` : ''} </p>
            <p className="col-span-3">{groomer.formattedAddress}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
