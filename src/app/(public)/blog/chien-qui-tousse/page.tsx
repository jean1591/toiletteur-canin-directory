import { DarkenedImage } from '../components/DarkenedImage'
import Link from 'next/link'
import { Metadata } from 'next'
import { metadata } from '@/app/layout'

export async function generateMetadata(): Promise<Metadata> {
  return {
    ...metadata,
    title: 'Chien qui tousse ? Causes et solutions',
    description:
      'Découvrez pourquoi votre chien tousse, et trouvez des solutions efficaces pour le soulager',
    keywords: [
      'chien qui tousse',
      'causes de la toux',
      'santé canine',
      'remèdes pour chien',
      'comportement canin',
    ],
  }
}

export default async function ChienQuiToussePage() {
  return (
    <div className="space-y-8">
      {/* HEADERS & INTRO */}
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-2xl font-extrabold leading-none tracking-tight md:text-4xl">
            Pourquoi mon chien tousse ?
          </h1>

          <h2 className="text-xl font-bold leading-none tracking-tight md:text-2xl">
            Découvrez les raisons derrière la toux de votre chien et comment y
            remédier.
          </h2>
        </div>

        <p>
          La toux chez les chiens peut être{' '}
          <span className="font-bold">préoccupante</span> pour de nombreux
          propriétaires. Elle peut être le signe d’un{' '}
          <span className="font-bold">problème de santé</span> sous-jacent, mais
          elle peut également être causée par des facteurs environnementaux ou
          comportementaux. Dans cet article, nous allons explorer les
          différentes <span className="font-bold">raisons</span> pour lesquelles
          votre chien peut tousser et les mesures à prendre pour l'aider.
        </p>
      </div>

      <DarkenedImage alt="chien qui tousse" imgSrc={'/dog-coughing.webp'} />

      {/* PROBLEMS */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold leading-none tracking-tight md:text-2xl">
          Causes de la toux chez les chiens
        </h2>

        <p>
          La toux peut être causée par une multitude de facteurs. Voici
          quelques-unes des raisons les plus courantes :
        </p>

        <div className="space-y-2">
          <h3 className="text-lg font-bold leading-none tracking-tight md:text-xl">
            1. Infections respiratoires
          </h3>

          <p>
            Les infections des voies respiratoires, telles que la{' '}
            <span className="font-bold">toux de chenil</span> ou la bronchite,
            sont fréquentes chez les chiens. Ces infections peuvent provoquer
            une toux persistante et nécessitent souvent un traitement
            vétérinaire.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-bold leading-none tracking-tight md:text-xl">
            2. Allergies
          </h3>

          <p>
            Tout comme les humains, les chiens peuvent souffrir d'allergies. La{' '}
            <span className="font-bold">pollution</span>, la poussière, et
            certains aliments peuvent provoquer une irritation des voies
            respiratoires, entraînant une toux. Si vous remarquez que votre
            chien tousse surtout à l'extérieur, il peut être allergique à
            quelque chose dans son environnement.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-bold leading-none tracking-tight md:text-xl">
            3. Corps étranger
          </h3>

          <p>
            Parfois, un chien peut tousser parce qu'il a inhalé un{' '}
            <span className="font-bold">corps étranger</span>. Cela peut être un
            morceau de jouet, de nourriture ou un petit objet. Si votre chien
            tousse de manière persistante, il est essentiel de consulter un
            vétérinaire pour vérifier s'il n'y a pas d'obstruction.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-bold leading-none tracking-tight md:text-xl">
            4. Problèmes cardiaques
          </h3>

          <p>
            Les problèmes cardiaques peuvent également entraîner une toux. Cela
            est souvent le cas chez les chiens âgés. Une toux associée à
            d'autres symptômes, comme la fatigue ou un essoufflement, doit être
            examinée par un vétérinaire.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-bold leading-none tracking-tight md:text-xl">
            5. Tumeurs ou maladies chroniques
          </h3>

          <p>
            Les problèmes cardiaques peuvent également entraîner une toux. Cela
            est souvent le cas chez les chiens âgés. Une toux associée à
            d'autres symptômes, comme la fatigue ou un essoufflement, doit être
            Des maladies chroniques ou des{' '}
            <span className="font-bold">tumeurs</span> peuvent également
            provoquer une toux chez les chiens. Bien que cela soit moins
            courant, il est crucial d'en discuter avec votre vétérinaire si la
            toux persiste.
          </p>
        </div>
      </div>

      {/* SOLUTIONS */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold leading-none tracking-tight md:text-2xl">
          Que faire si votre chien tousse ?
        </h2>

        <div className="space-y-2">
          <h3 className="text-lg font-bold leading-none tracking-tight md:text-xl">
            1. Observer les symptômes
          </h3>

          <p>
            Commencez par <span className="font-bold">observer</span> le
            contexte dans lequel votre chien tousse. Notez la fréquence et
            l'intensité de la toux, ainsi que tout autre comportement
            inhabituel.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-bold leading-none tracking-tight md:text-xl">
            2. Consulter un vétérinaire
          </h3>

          <p>
            Si la toux persiste ou s'accompagne d'autres symptômes, tels que des
            vomissements ou une perte d'appétit, il est important de{' '}
            <span className="font-bold">consulter un vétérinaire</span>. Un
            professionnel pourra poser un diagnostic précis et recommander un
            traitement approprié.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-bold leading-none tracking-tight md:text-xl">
            3. Maintenir un environnement sain
          </h3>

          <p>
            Assurez-vous que votre chien évolue dans un{' '}
            <span className="font-bold">environnement propre</span> et sans
            irritants. Évitez de le laisser dans des lieux où il pourrait être
            exposé à des substances nocives ou à une pollution excessive.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-bold leading-none tracking-tight md:text-xl">
            4. Utiliser des remèdes maison
          </h3>

          <p>
            Pour soulager une toux légère, vous pouvez essayer quelques remèdes
            maison, comme humidifier l'air ou offrir une{' '}
            <span className="font-bold">alimentation saine</span> et équilibrée.
            Cependant, consultez toujours un vétérinaire avant d'administrer un
            traitement.
          </p>
        </div>
      </div>

      {/* CONCLUSION */}
      <div className="space-y-4">
        <p>
          La toux chez les chiens peut avoir plusieurs causes, allant d'une
          simple irritation à des problèmes de santé graves. Il est essentiel
          d’être attentif aux symptômes et de consulter un vétérinaire en cas de
          doute. Assurez le bien-être de votre compagnon à quatre pattes en
          restant informé et proactif. Si vous cherchez un moyen d'améliorer le
          bien-être de votre compagnon, n'hésitez pas à consulter nos services
          de{' '}
          <Link href="/" className="border-b-2 border-stone-500 font-bold">
            toilettage canin
          </Link>{' '}
          pour garantir à votre chien des soins de qualité.
        </p>
      </div>
    </div>
  )
}
