import { City } from '@/types/places'
import { GroupedGroomersByCityDto } from '@/app/api/groomers/route'
import Image from 'next/image'
import Link from 'next/link'
import { PiMapPin } from 'react-icons/pi'
import { buttonHoverTransition } from '@/design/constants'
import { classNames } from '@/utils/classNames'
import { fetchDataFromApi } from '@/utils/fetchDataFromApi'

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

export default async function Home() {
  const data = await fetchDataFromApi<GroupedGroomersByCityDto>('api/groomers')
  const { cities } = data

  return (
    <div className="w-full">
      <h1 className="text-center text-4xl font-extrabold">
        Salons de toilettage et toiletteurs canins par ville
      </h1>

      <div className="mt-20">
        <QuickCityAccess />

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {cities.map((city) => (
            <CityCard key={city.name} city={city} />
          ))}
        </div>
      </div>
    </div>
  )
}

const QuickCityAccess = () => {
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
      key={city.name}
      href={`/toiletteur-a-${city.name.toLowerCase()}`}
      className="group relative overflow-hidden rounded-xl border border-stone-300 shadow-sm transition-shadow hover:shadow-lg sm:aspect-video lg:aspect-square"
    >
      <Image
        src={`/${city.name.toLowerCase()}.webp`}
        alt={`${city.name} background`}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
      <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
        <div className="flex h-full items-center justify-center">
          <h2 className="text-center text-3xl font-bold capitalize drop-shadow-lg">
            {city.name}
          </h2>
        </div>
        <div className="flex items-center justify-between text-sm font-medium">
          <p className="drop-shadow-lg">{city.averageRating.toFixed(1)} ⭐️</p>
          <div className="flex items-center gap-1">
            <p className="drop-shadow-lg">{city.numberOfPlaces}</p>
            <PiMapPin className="h-4 w-4 drop-shadow-lg" />
          </div>
        </div>
      </div>
    </Link>
  )
}
