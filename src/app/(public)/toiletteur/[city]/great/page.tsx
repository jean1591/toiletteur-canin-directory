import { BreadCrumbs } from '@/app/(public)/components/BreadCrumbs'
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
    title: `Toiletteurs à ${params.city} - Salon de toilettage noté plus de 4.5 ⭐`,
    description: `Trouvez les toiletteurs exceptionnels à ${params.city} avec une note supérieure à 4.5 ⭐. Consultez les avis et choisissez le meilleur service de toilettage pour votre animal.`,
    keywords: [
      'toiletteur exceptionnel',
      'toiletteurs exceptionnels',
      `toiletteur à ${params.city}`,
      `toiletteurs à ${params.city}`,
      'meilleurs toiletteurs',
      `groomers à ${params.city}`,
      'toilettage pour chiens',
      'avis sur les toiletteurs',
      'toiletteurs notés 4.5 et plus',
    ],
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_URL}/bon-toiletteur-a-${params.city}`,
    },
  }
}

export default async function GreatGroomersInCity({ params }: Props) {
  const data = await fetchDataFromApi<GroomersByCityDto>(
    `api/groomers/cities/${params.city}/great`
  )
  const { groomers } = data

  const links = [
    { label: 'accueil', url: '/' },
    {
      label: `Toiletteurs à ${params.city}`,
      url: `/toiletteur-a-${params.city}`,
    },
  ]

  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight">
          Les toiletteurs étoilés à{' '}
          <span className="capitalize">{params.city}</span>
        </h1>
        <h2 className="mt-4 text-xl leading-none tracking-tight text-slate-600">
          Découvrez les salons de toilettage évalués 4.5 ⭐️ et plus pour un
          service exceptionnel à{' '}
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
