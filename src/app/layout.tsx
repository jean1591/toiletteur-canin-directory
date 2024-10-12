import './globals.css'

import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import Script from 'next/script'
import { classNames } from '@/utils/classNames'

const inter = Inter({ subsets: ['latin'] })

const metaDescription =
  'Découvrez les meilleurs toiletteurs et services de toilettage pour chiens dans votre ville. Consultez les avis et trouvez le salon de toilettage idéal pour votre compagnon.'
const title =
  'Top Toiletteurs - Trouvez les meilleurs salons de toilettage pour chiens'
const keywords = [
  'toiletteurs',
  'toilettage canin',
  'meilleurs toiletteurs',
  'services de toilettage pour chiens',
  'salon de toilettage',
  'avis toiletteurs',
  'top toiletteurs',
  'grooming chiens',
  'toilettage chiens professionnel',
  'salon pour chiens',
  'coupe chien',
]
const appUrl = 'https://toiletteur-canin.rb2.fr'

export const metadata: Metadata = {
  title: title,
  description: metaDescription,
  keywords,
  metadataBase: new URL(appUrl),
  openGraph: {
    title: title,
    description: metaDescription,
    url: appUrl,
    siteName: title,
    images: [
      {
        url: '/hero-profile.jpeg',
        width: 500,
        height: 500,
      },
    ],
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const isProduction = process.env.ENV === 'production'

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={classNames(inter.className, 'bg-stone-100 text-slate-800')}
      >
        {isProduction && (
          <Script
            defer
            src="https://analytics.rb2.fr/script.js"
            data-website-id="d1a73c24-62d2-4171-859f-da080ee2209b"
          />
        )}
        {children}
      </body>
    </html>
  )
}
