import { CityCard } from './components/CityCard'
import { GroupedGroomersByCityDto } from '@/app/api/groomers/route'
import { fetchDataFromApi } from '@/utils/fetchDataFromApi'

export default async function Home() {
  const data = await fetchDataFromApi<GroupedGroomersByCityDto>('api/groomers')
  const { cities } = data

  return (
    <div className="w-full">
      <h1 className="text-center text-4xl font-extrabold">
        Salons de toilettage et toiletteurs canins par ville
      </h1>

      <div className="mt-20">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {cities.map((city, index) => (
            <CityCard key={city.name} city={city} priority={index < 4} />
          ))}
        </div>
      </div>
    </div>
  )
}
