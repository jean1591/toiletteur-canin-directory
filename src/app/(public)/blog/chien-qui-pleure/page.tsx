import { appUrl, metadata } from '@/app/layout'

import { DarkenedImage } from '../components/DarkenedImage'
import Link from 'next/link'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  return {
    ...metadata,
    title: 'Chien qui pleure ? Causes et solutions',
    description:
      'Découvrez pourquoi votre chien pleure, et trouvez des solutions efficaces pour le calmer.',
    keywords: [
      'chien qui pleure',
      'comportement canin',
      'raisons du pleur',
      'solutions pour chien',
      'santé canine',
    ],
    alternates: {
      canonical: `${appUrl}/blog/chien-qui-pleure`,
    },
  }
}

export default async function ChienQuiPleurePage() {
  return (
    <div className="space-y-8">
      {/* HEADERS & INTRO */}
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-2xl font-extrabold leading-none tracking-tight md:text-4xl">
            Chien qui pleure : Comprendre les raisons de ses pleurs
          </h1>

          <h2 className="text-xl font-bold leading-none tracking-tight md:text-2xl">
            Comprendre les raisons derrière les pleurs de votre chien
          </h2>
        </div>

        <p>
          Un <span className="font-bold">chien qui pleure</span> peut susciter
          de nombreuses interrogations. Est-ce qu'il exprime sa douleur, son
          anxiété, ou s'agit-il d'un simple besoin d'attention ? Cet article
          explorera les causes possibles des pleurs chez les chiens et vous
          fournira des conseils pour gérer cette situation.
        </p>
      </div>

      <DarkenedImage alt="chien qui pleure" imgSrc={'/dog-crying.webp'} />

      {/* PROBLEMS */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold leading-none tracking-tight md:text-2xl">
          Causes des pleurs chez les chiens{' '}
        </h2>

        <p>
          {' '}
          Les raisons pour lesquelles un{' '}
          <span className="font-bold">chien pleure</span> peuvent être variées.
          Voici quelques-unes des causes les plus courantes :
        </p>

        <div className="space-y-2">
          <h3 className="text-lg font-bold leading-none tracking-tight md:text-xl">
            1. L'anxiété de séparation
          </h3>

          <p>
            {' '}
            De nombreux chiens souffrent d'
            <span className="font-bold">anxiété de séparation</span>, ce qui
            peut les amener à pleurer lorsque leur maître quitte la maison. Ce
            comportement peut être accompagné de destructions ou de
            comportements indésirables.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-bold leading-none tracking-tight md:text-xl">
            2. La douleur ou l'inconfort
          </h3>

          <p>
            Si votre chien pleure sans raison apparente, il est important de
            vérifier s'il souffre d'une{' '}
            <span className="font-bold">douleur</span> ou d'un inconfort. Des
            maladies ou des blessures peuvent être à l'origine de ses pleurs.
            Une visite chez le vétérinaire est recommandée pour écarter toute
            maladie.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-bold leading-none tracking-tight md:text-xl">
            3. Le besoin d'attention
          </h3>

          <p>
            Certains chiens pleurent pour attirer l'attention de leurs
            propriétaires. Cela peut se produire lorsqu'ils se sentent ignorés
            ou lorsqu'ils souhaitent jouer. Répondre à leurs besoins d'attention
            de manière appropriée peut aider à réduire ce comportement.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-bold leading-none tracking-tight md:text-xl">
            4. La recherche de compagnie
          </h3>

          <p>
            Les chiens sont des animaux sociaux et peuvent pleurer s'ils se
            sentent seuls. La présence d'autres animaux ou d'humains peut les
            apaiser. Assurez-vous que votre chien a suffisamment de stimulation
            sociale pour éviter l'ennui.
          </p>
        </div>
      </div>

      {/* SOLUTIONS */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold leading-none tracking-tight md:text-2xl">
          Comment réagir face à un chien qui pleure ?{' '}
        </h2>

        <div className="space-y-2">
          <h3 className="text-lg font-bold leading-none tracking-tight md:text-xl">
            1. Évaluer la situation
          </h3>

          <p>
            Prenez le temps d'observer votre chien et son environnement.
            Identifiez les moments où il pleure le plus souvent et essayez de
            déterminer s'il y a des déclencheurs spécifiques.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-bold leading-none tracking-tight md:text-xl">
            2. Consulter un vétérinaire
          </h3>

          <p>
            Si les pleurs persistent ou s'accompagnent d'autres symptômes,
            consultez un <span className="font-bold">vétérinaire</span>. Un
            examen approfondi pourra identifier toute condition médicale
            sous-jacente.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-bold leading-none tracking-tight md:text-xl">
            3. Renforcer le lien
          </h3>

          <p>
            Passer du temps de qualité avec votre chien peut l'aider à se sentir
            plus en sécurité et aimé. Des promenades régulières, des jeux et des
            séances de câlins renforceront votre lien.
          </p>
        </div>
      </div>

      {/* CONCLUSION */}
      <div className="space-y-4">
        <p>
          Un <span className="font-bold">chien qui pleure</span> peut exprimer
          différents besoins ou émotions. En observant attentivement et en
          répondant à ses besoins, vous pouvez améliorer son bien-être. Si vous
          cherchez un moyen d'améliorer le bien-être de votre compagnon,
          n'hésitez pas à consulter nos services de{' '}
          <Link href="/" className="border-b-2 border-stone-500 font-bold">
            toilettage canin
          </Link>{' '}
          pour garantir à votre chien des soins de qualité.
        </p>
      </div>
    </div>
  )
}
