import { BreadCrumbs } from '../../components/BreadCrumbs'
import { GroomersByCityDto } from '@/app/api/dto/groomers'
import { GroomersTable } from '../../components/GroomersTable'
import { Metadata } from 'next'
import { fetchDataFromApi } from '@/utils/fetchDataFromApi'
import { metadata } from '@/app/layout'

interface Props {
  params: { city: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    ...metadata,
    title: `Meilleurs toiletteurs à ${params.city} - Trouvez les salons de toilettage`,
    description: `Découvrez les meilleurs toiletteurs dans la ville de ${params.city}. Consultez les avis, les horaires et trouvez un service de toilettage adapté pour votre chien.`,
    keywords: [
      `toiletteurs à ${params.city}`,
      `toilettage canin à ${params.city}`,
      `meilleurs toiletteurs à ${params.city}`,
      `services de toilettage pour chiens à ${params.city}`,
      `salon de toilettage à ${params.city}`,
      `avis toiletteurs à ${params.city}`,
      `top toiletteurs à ${params.city}`,
      `grooming chiens à ${params.city}`,
      `toilettage chiens professionnel à ${params.city}`,
      `salon pour chiens à ${params.city}`,
      `coupe chien à ${params.city}`,
    ],
  }
}

export default async function CityPage({ params }: Props) {
  const data = await fetchDataFromApi<GroomersByCityDto>(
    `api/groomers/cities/${params.city}`
  )
  const { groomers } = data

  const links = [{ label: 'accueil', url: '/' }]

  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight">
          Les {groomers.length} toiletteurs de{' '}
          <span className="capitalize">{params.city}</span>
        </h1>
        <h2 className="mt-4 text-xl leading-none tracking-tight text-slate-600">
          Découvrez tous les endroits pour faire chouchouter votre animal à{' '}
          <span className="capitalize">{params.city}</span>
        </h2>
      </div>

      <div className="mt-20">
        <BreadCrumbs city={params.city} links={links} />
      </div>

      <div className="mt-8">
        <GroomersTable city={params.city} groomers={groomers} />
      </div>
    </div>
  )
}
