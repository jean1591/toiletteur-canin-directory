import { GroomersByCityDto } from '@/app/api/dto/groomers'
import { GroomersTable } from '@/app/(public)/components/GroomersTable'
import { fetchDataFromApi } from '@/utils/fetchDataFromApi'

export default async function GreatGroomersInCity({
  params,
}: {
  params: { city: string }
}) {
  const data = await fetchDataFromApi<GroomersByCityDto>(
    `api/groomers/cities/${params.city}/great`
  )
  const { groomers } = data

  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          Les meilleurs toiletteurs de
          <span className="capitalize">{params.city}</span>
        </h1>
        <h2 className="mt-4 text-xl text-gray-700">
          Trouver le toiletteur parfait pour votre animal à{' '}
          <span className="capitalize">{params.city}</span>
        </h2>
      </div>

      <div className="mt-20">
        <GroomersTable city={params.city} groomers={groomers} />
      </div>
    </div>
  )
}
