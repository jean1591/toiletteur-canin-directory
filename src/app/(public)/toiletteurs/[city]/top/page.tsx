import { GroomersByCityDto } from '@/app/api/dto/groomers'
import { GroomersTable } from '@/app/(public)/components/GroomersTable'
import { fetchDataFromApi } from '@/utils/fetchDataFromApi'

export default async function GreatGroomersInCity({
  params,
}: {
  params: { city: string }
}) {
  const data = await fetchDataFromApi<GroomersByCityDto>(
    `api/groomers/cities/${params.city}/top`
  )
  const { groomers } = data

  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl font-bold">
          Les 5 meilleurs toiletteurs de
          <span className="capitalize">{params.city}</span>
        </h1>
        <h2 className="mt-4 text-xl text-slate-600">
          Offrez la crème de la crème des toiletteurs de{' '}
          <span className="capitalize">{params.city}</span> à votre animal
        </h2>
      </div>

      <div className="mt-20">
        <GroomersTable city={params.city} groomers={groomers} />
      </div>
    </div>
  )
}
