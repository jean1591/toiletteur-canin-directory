import { City } from '@/types/places'
import { GroupedGroomersByCityDto } from '@/app/api/groomers/route'
import Link from 'next/link'
import { buttonHoverTransition } from '@/design/constants'
import { classNames } from '@/utils/classNames'
import { fetchDataFromApi } from '@/utils/fetchDataFromApi'

export default async function Home() {
  const data = await fetchDataFromApi<GroupedGroomersByCityDto>('api/groomers')
  const { cities } = data

  return (
    <div className="w-full">
      <h1 className="text-center text-4xl font-extrabold">
        Liste des toiletteurs canins par ville
      </h1>

      <div className="mt-20">
        <QuickCityAccess />

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
    <div className="flex items-center justify-start gap-2">
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
        'relative flex aspect-square w-full items-center justify-center rounded-xl border-[1px] border-stone-300 bg-white shadow-lg hover:shadow-none'
      )}
    >
      <p className="text-wrap text-center text-2xl font-bold">{city.name}</p>

      <div className="absolute bottom-0 w-full rounded-b-xl bg-stone-200">
        <div className="flex items-center justify-between space-x-4 p-4 text-xl font-medium">
          <p>{city.averageRating.toFixed(1)} ⭐️</p>
          <p>{city.numberOfPlaces} 🧴</p>
        </div>
      </div>
    </Link>
  )
}
