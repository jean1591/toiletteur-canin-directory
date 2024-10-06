import { GroomersByCityDto } from '@/app/api/dto/groomers'
import { GroomersTable } from '../../components/GroomersTable'
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
          Découvrez les toiletteurs de{' '}
          <span className="capitalize">{params.city}</span>
        </h2>
      </div>

      <div className="mt-20">
        <GroomersTable city={params.city} groomers={groomers} />
      </div>
    </div>
  )
}
