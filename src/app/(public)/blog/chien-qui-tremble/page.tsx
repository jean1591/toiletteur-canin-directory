import { appUrl, metadata } from '@/app/layout'

import { DarkenedImage } from '../components/DarkenedImage'
import Link from 'next/link'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  return {
    ...metadata,
    title: 'Chien qui tremble ? Causes et solutions',
    description:
      'Découvrez pourquoi votre chien tremble, et trouvez des solutions efficaces pour le soulager.',
    keywords: [
      'chien qui tremble',
      'causes tremblement chien',
      'chien qui tremble fort',
      'chien qui tremble trop',
      'santé canine',
      'bien-être animal',
      'conseils vétérinaires',
    ],
    alternates: {
      canonical: `${appUrl}/blog/chien-qui-tremble`,
    },
  }
}

export default async function ChienQuiTremblePage() {
  return (
    <div className="space-y-8">
      {/* HEADERS & INTRO */}
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-2xl font-extrabold leading-none tracking-tight md:text-4xl">
            Pourquoi mon chien tremble-t-il ?
          </h1>

          <h2 className="text-xl font-bold leading-none tracking-tight md:text-2xl">
            Comprendre les raisons derrière les tremblements de votre chien
          </h2>
        </div>

        <p>
          Le <span className="font-bold">tremblement</span> chez les{' '}
          <span className="font-bold">chiens</span> est un comportement qui
          inquiète souvent les propriétaires. Est-ce simplement dû au{' '}
          <span className="font-bold">froid</span>, à la{' '}
          <span className="font-bold">peur</span>, ou un symptôme plus grave ?
          Comprendre les raisons derrière un{' '}
          <span className="font-bold">chien</span> qui tremble peut vous aider à
          prendre les bonnes décisions pour assurer son{' '}
          <span className="font-bold">bien-être</span>.
        </p>
      </div>

      <DarkenedImage alt="chien qui tremble" imgSrc={'/dog-shaking.webp'} />

      {/* PROBLEMS */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold leading-none tracking-tight md:text-2xl">
          Causes principales du tremblement chez les chiens
        </h2>

        <p>
          Les tremblements peuvent être causés par divers facteurs. Voici
          quelques raisons fréquentes qui expliquent pourquoi votre{' '}
          <span className="font-bold">chien</span> tremble :
        </p>

        <div className="space-y-2">
          <h3 className="text-lg font-bold leading-none tracking-tight md:text-xl">
            1. Le froid
          </h3>

          <p>
            Le froid est l’une des causes les plus évidentes. Les{' '}
            <span className="font-bold">chiens</span> à poil court ou de petite
            taille sont particulièrement sensibles aux basses températures. Si
            vous remarquez que votre <span className="font-bold">chien</span>{' '}
            tremble fort en hiver ou après une baignade, il peut simplement
            avoir besoin de se réchauffer.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-bold leading-none tracking-tight md:text-xl">
            2. L’anxiété et le stress
          </h3>

          <p>
            Tout comme les humains, les{' '}
            <span className="font-bold">chiens</span> peuvent trembler
            lorsqu’ils sont stressés ou anxieux. Un{' '}
            <span className="font-bold">chien</span> qui tremble lorsqu'il est
            dans une situation nouvelle, comme un trajet en voiture ou une
            visite chez le vétérinaire, réagit souvent à la{' '}
            <span className="font-bold">peur</span>. Si ces tremblements sont
            fréquents, cela peut révéler un trouble anxieux plus profond.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-bold leading-none tracking-tight md:text-xl">
            3. La douleur ou la maladie
          </h3>

          <p>
            Un <span className="font-bold">chien</span> qui tremble trop peut
            aussi souffrir de douleur ou être atteint d’une maladie. Les
            troubles neurologiques, comme le syndrome du tremblement généralisé,
            ou des maladies telles que la parvovirose peuvent provoquer ce
            symptôme. Si les tremblements persistent sans raison apparente, une
            visite chez le vétérinaire est conseillée.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-bold leading-none tracking-tight md:text-xl">
            4. L'excitation
          </h3>

          <p>
            Parfois, les tremblements ne sont pas synonymes de danger.
            Votrechien peut tout simplement être{' '}
            <span className="font-bold">excité</span> ! Les petits chiens, en
            particulier, montrent souvent leur{' '}
            <span className="font-bold">excitation</span> par des tremblements
            lorsque quelque chose de plaisant se prépare, comme une promenade ou
            un repas.
          </p>
        </div>
      </div>

      {/* SOLUTIONS */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold leading-none tracking-tight md:text-2xl">
          Comment réagir face à un chien qui tremble ?
        </h2>

        <div className="space-y-2">
          <h3 className="text-lg font-bold leading-none tracking-tight md:text-xl">
            1. Observer le contexte
          </h3>

          <p>
            Si votre <span className="font-bold">chien</span> tremble trop sans
            raison évidente, commencez par observer les circonstances :
            température, environnement, récents changements dans sa routine.
            Cela peut vous donner un indice sur la cause.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-bold leading-none tracking-tight md:text-xl">
            2. Vérifier la santé de votre chien
          </h3>

          <p>
            Si les tremblements persistent et s'accompagnent d'autres symptômes
            comme des vomissements, de la léthargie ou un manque d'appétit, il
            est important de consulter un vétérinaire. Un{' '}
            <span className="font-bold">chien</span> qui tremble fort peut
            nécessiter un examen médical approfondi pour écarter toute maladie
            sous-jacente.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-bold leading-none tracking-tight md:text-xl">
            3. Apporter du confort
          </h3>

          <p>
            Offrez à votre <span className="font-bold">chien</span> un
            environnement chaleureux et rassurant. S'il est stressé, des séances
            de jeu, de détente, ou l'utilisation de diffuseurs de{' '}
            <span className="font-bold">phéromones</span> apaisantes peuvent
            être bénéfiques.
          </p>
        </div>
      </div>

      {/* CONCLUSION */}
      <div className="space-y-4">
        <p>
          Un <span className="font-bold">chien</span> qui tremble peut être dû à
          une variété de facteurs allant du froid à la maladie. Il est essentiel
          d'observer votre animal et de consulter un vétérinaire en cas de
          doute. Assurer son <span className="font-bold">confort</span> et
          répondre rapidement à ses besoins contribue à son{' '}
          <span className="font-bold">bien-être</span> général. Pour offrir le
          meilleur à votre compagnon, visitez notre site{' '}
          <Link href="/" className="border-b-2 border-stone-500 font-bold">
            Toiletteur canin
          </Link>{' '}
          et découvrez nos services de toilettage spécialisés.
        </p>
      </div>
    </div>
  )
}
