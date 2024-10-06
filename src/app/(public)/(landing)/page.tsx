import { City } from '@/types/places'
import { GroomerDto } from '@/app/api/groomers/route'
import Link from 'next/link'
import { fetchDataFromApi } from '@/utils/fetchDataFromApi'

export default async function Home() {
  const data = await fetchDataFromApi<GroomerDto>('api/groomers')
  const { cities } = data

  return (
    <div className="w-full">
      <h1 className="text-center text-4xl font-bold text-blue-600">
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
          href={`/toiletteurs-a-${city.toLowerCase()}`}
          className="rounded-2xl border-[1px] border-slate-800 px-4 py-1"
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
      href={`/toiletteurs-a-${city.name.toLowerCase()}`}
      className="relative flex aspect-square w-full items-center justify-center rounded-xl border-[1px] border-slate-800"
    >
      <p className="truncate text-2xl font-bold">{city.name}</p>

      <div className="absolute bottom-0 flex w-full items-center justify-between space-x-4 p-4 text-xl font-medium">
        <p>{city.averageRating.toFixed(1)} ⭐️</p>
        <p>{city.numberOfPlaces} 🧴</p>
      </div>
    </Link>
  )
}
