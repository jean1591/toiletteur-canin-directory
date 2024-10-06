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
    title: `Toiletteurs Exceptionnels à ${params.city} - Noté Plus de 4.5 ⭐`,
    description: `Trouvez les toiletteurs exceptionnels à ${params.city} avec une note supérieure à 4.5 ⭐. Consultez les avis et choisissez le meilleur service de toilettage pour votre animal.`,
    keywords: [
      'toiletteurs exceptionnels',
      `toiletteurs à ${params.city}`,
      'meilleurs toiletteurs',
      `groomers à ${params.city}`,
      'toilettage pour chiens',
      'avis sur les toiletteurs',
      'toiletteurs notés 4.5 et plus',
    ],
  }
}

export default async function GreatGroomersInCity({ params }: Props) {
  const data = await fetchDataFromApi<GroomersByCityDto>(
    `api/groomers/cities/${params.city}/great`
  )
  const { groomers } = data

  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight">
          Les toiletteurs étoilés à{' '}
          <span className="capitalize">{params.city}</span>
        </h1>
        <h2 className="mt-4 text-xl leading-none tracking-tight text-slate-600">
          Offrez le meilleur à votre animal
        </h2>
        <p className="mt-8 text-slate-600">
          Découvrez les toiletteurs hautement évalués pour un service
          exceptionnel à <span className="capitalize">{params.city}</span>
        </p>
      </div>

      <div className="mt-20">
        <GroomersTable city={params.city} groomers={groomers} />
      </div>
    </div>
  )
}
