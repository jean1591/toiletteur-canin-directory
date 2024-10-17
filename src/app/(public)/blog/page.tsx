import { Article } from '@/types/articles'
import { ArticleCard } from './components/ArticleCard'
import { Metadata } from 'next'
import { metadata } from '@/app/layout'

export async function generateMetadata(): Promise<Metadata> {
  return {
    ...metadata,
    title: 'Chiens : Conseils et Astuces pour les Propriétaires',
    description:
      'Découvrez nos articles informatifs sur les chiens : santé, toilettage, comportement et bien-être. Tout pour votre compagnon à quatre pattes !',
    keywords: [
      'chien',
      'articles sur les chiens',
      'conseils pour chiens',
      'santé canine',
      'toilettage',
      'comportement canin',
      'bien-être des chiens',
    ],
  }
}

const articles: Article[] = [
  {
    description:
      'Apprenez à gérer les aboiements excessifs pour un environnement paisible.',
    href: 'chien-qui-aboie',
    imgSrc: 'dog-barking',
    label: 'Chien qui aboie',
    publishedAt: '12 Octobre 2024',
  },
  {
    description:
      'Explorez des solutions pour apaiser son anxiété et son inconfort.',
    href: 'chien-qui-pleure',
    imgSrc: 'dog-crying',
    label: 'Chien qui pleure',
    publishedAt: '17 Septembre 2024',
  },
  {
    description:
      'Prenez des mesures pour assurer la santé respiratoire de votre compagnon.',
    href: 'chien-qui-tousse',
    imgSrc: 'dog-coughing',
    label: 'Chien qui tousse',
    publishedAt: '08 Août 2024',
  },
  {
    description:
      'Découvrez les raisons du tremblement chez les chiens, allant du froid à la douleur.',
    href: 'chien-qui-tremble',
    imgSrc: 'dog-shaking',
    label: 'Chien qui tremble',
    publishedAt: '15 Juillet 2024',
  },
]
const featuredArticle = articles[0]

export default async function BlogPage() {
  return (
    <div className="space-y-8">
      <ArticleCard article={featuredArticle} />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {articles.slice(1).map((article) => (
          <ArticleCard key={article.label} article={article} />
        ))}
      </div>
    </div>
  )
}
