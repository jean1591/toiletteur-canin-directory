import { GroomerDto } from '@/app/api/groomers/route'
import Link from 'next/link'
import { fetchDataFromApi } from '@/utils/fetchDataFromApi'

export default async function Home() {
  const data = await fetchDataFromApi<GroomerDto>('api/groomers')
  const { cities } = data

  return (
    <div>
      <h1 className="text-center text-4xl font-bold text-blue-600">
        Liste des toiletteurs canins par ville
      </h1>

      <div className="mt-20 flex flex-wrap items-center justify-start gap-4">
        {cities.map((city) => (
          <Link
            href={`/toiletteurs-${city.name}`}
            key={city.name}
            className="w-full rounded-xl border-2 border-slate-800 md:w-40"
          >
            <div className="truncate rounded-t-xl bg-stone-200 p-4">
              <p className="text-xl font-bold uppercase">{city.name}</p>
            </div>

            <div className="space-y-4 p-4">
              <div>
                <p className="text-lg font-medium">
                  {city.averageRating.toFixed(1)}
                </p>
                <p className="text-xs">Note moyenne</p>
              </div>

              <div>
                <p className="text-lg font-medium">{city.numberOfPlaces}</p>
                <p className="text-xs">Toiletteurs</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
