import { City } from '@/types/places'
import { GroupedGroomersByCityDto } from '@/app/api/groomers/route'
import Link from 'next/link'
import { PiMapPin } from 'react-icons/pi'
import { buttonHoverTransition } from '@/design/constants'
import { classNames } from '@/utils/classNames'
import { fetchDataFromApi } from '@/utils/fetchDataFromApi'

export default async function Home() {
  const data = await fetchDataFromApi<GroupedGroomersByCityDto>('api/groomers')
  const { cities } = data

  return (
    <div className="w-full">
      <h1 className="text-center text-4xl font-extrabold">
        Toiletteurs canins par ville
      </h1>

      <div className="mt-20">
        <QuickCityAccess />

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cities.map((city) => (
            <CityCard key={city.name} city={city} />
          ))}
        </div>
      </div>
    </div>
  )
}

const QuickCityAccess = () => {
  const cities = [
    'Paris',
    'Marseille',
    'Lyon',
    'Toulouse',
    'Nice',
    'Nantes',
    'Montpellier',
    'Strasbourg',
    'Bordeaux',
    'Lille',
  ]

  return (
    <div className="flex flex-wrap items-center justify-start gap-2">
      {cities.map((city) => (
        <Link
          key={city}
          href={`/toiletteur-a-${city.toLowerCase()}`}
          className="rounded-xl border-[1px] border-stone-300 bg-white px-4 py-1 shadow-lg"
        >
          {city}
        </Link>
      ))}
    </div>
  )
}

const CityCard = ({ city }: { city: City }) => {
  return (
    <Link
      href={`/toiletteur-a-${city.name.toLowerCase()}`}
      className={classNames(
        buttonHoverTransition,
        'space-y-8 rounded-xl border-[1px] border-stone-300 bg-white p-4 shadow-none hover:shadow-lg'
      )}
    >
      <div className="flex items-center justify-between gap-2">
        <p className="truncate text-lg font-bold capitalize">{city.name}</p>
        <p className="font-medium">{city.averageRating.toFixed(1)} ⭐️</p>
      </div>

      <div className="flex items-center justify-start gap-1 text-sm text-slate-600">
        <PiMapPin className="h-4 w-4" />
        <p>{city.numberOfPlaces} toiletteurs</p>
      </div>
    </Link>
  )
}
