import { GroomersByCityDto } from '@/app/api/dto/groomers'
import { GroomersTable } from '@/app/(public)/components/GroomersTable'
import { Metadata } from 'next'
import { fetchDataFromApi } from '@/utils/fetchDataFromApi'
import { metadata } from '@/app/layout'

interface Props {
  params: { city: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    ...metadata,
    title: `Top 5 Toiletteurs à ${params.city} - Découvrez les Meilleurs Salons de Toilettage`,
    description: `Découvrez les 5 meilleurs toiletteurs à ${params.city} selon les avis des clients. Comparez les services, les horaires et trouvez le salon de toilettage parfait pour votre chien.`,
    keywords: [
      'top 5 toiletteurs',
      `toiletteurs à ${params.city}`,
      'meilleurs toiletteurs',
      'avis sur les toiletteurs',
      `salons de toilettage à ${params.city}`,
      'toilettage pour chiens',
      `groomers à ${params.city}`,
    ],
  }
}

export default async function GreatGroomersInCity({ params }: Props) {
  const data = await fetchDataFromApi<GroomersByCityDto>(
    `api/groomers/cities/${params.city}/top`
  )
  const { groomers } = data

  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight">
          Top 5 des toiletteurs de{' '}
          <span className="capitalize">{params.city}</span>
        </h1>
        <h2 className="mt-4 text-xl leading-none tracking-tight text-slate-600">
          La sélection élégante pour votre chien
        </h2>
        <p className="mt-8 text-slate-600">
          Choisissez parmi les meilleurs toiletteurs pour offrir le meilleur à
          votre compagnon à <span className="capitalize">{params.city}</span>
        </p>
      </div>

      <div className="mt-20">
        <GroomersTable city={params.city} groomers={groomers} />
      </div>
    </div>
  )
}
