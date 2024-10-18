import { MetadataRoute } from 'next'
import { flatten } from 'lodash'

const baseUrl = 'https://toiletteur-canin.rb2.fr'
const changeFrequency = 'monthly'

const cities: string[] = [
  'paris',
  'marseille',
  'lyon',
  'toulouse',
  'nice',
  'nantes',
  'montpellier',
  'strasbourg',
  'bordeaux',
  'lille',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const cityPages: MetadataRoute.Sitemap = flatten(
    cities.map((city) => [
      {
        url: `${baseUrl}/toiletteur-a-${city}`,
        lastModified: new Date(),
        changeFrequency,
        priority: 1,
      },
      {
        url: `${baseUrl}/top-toiletteur-a-${city}`,
        lastModified: new Date(),
        changeFrequency,
        priority: 0.9,
      },
      {
        url: `${baseUrl}/bon-toiletteur-a-${city}`,
        lastModified: new Date(),
        changeFrequency,
        priority: 0.8,
      },
    ])
  )

  const blogPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog/chien-qui-aboie`,
      lastModified: new Date(),
      changeFrequency,
      priority: 7,
    },
    {
      url: `${baseUrl}/blog/chien-qui-pleure`,
      lastModified: new Date(),
      changeFrequency,
      priority: 7,
    },
    {
      url: `${baseUrl}/blog/chien-qui-tousse`,
      lastModified: new Date(),
      changeFrequency,
      priority: 7,
    },
    {
      url: `${baseUrl}/blog/chien-qui-tremble`,
      lastModified: new Date(),
      changeFrequency,
      priority: 7,
    },
  ]

  return [...cityPages, ...blogPages]
}
