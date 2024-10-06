import './globals.css'

import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import NextAuthProvider from './components/NextAuthProvider'
import { StoreProvider } from '@/store/StoreProvider'
import { Toaster } from 'react-hot-toast'
import { classNames } from '@/utils/classNames'

const inter = Inter({ subsets: ['latin'] })

const metaDescription =
  'Découvrez les meilleurs toiletteurs et services de toilettage pour chiens dans votre région. Consultez les avis et trouvez le salon de toilettage idéal pour votre compagnon.'
const title =
  'Top Toiletteurs - Trouvez les meilleurs salons de toilettage pour chiens'
const keywords = [
  `toiletteurs`,
  `toilettage canin`,
  `meilleurs toiletteurs`,
  `services de toilettage pour chiens`,
  `salon de toilettage`,
  `avis toiletteurs`,
  `top toiletteurs`,
  `grooming chiens`,
  `toilettage chiens professionnel`,
  `salon pour chiens`,
  `coupe chien`,
]
const appUrl = 'https://toiletteurs-canin.rb2.fr'

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
  return (
    <StoreProvider>
      <html lang="en" className="scroll-smooth">
        <body
          className={classNames(inter.className, 'bg-stone-100 text-slate-800')}
        >
          <NextAuthProvider>
            <Toaster position="bottom-right" reverseOrder={true} />
            {children}
          </NextAuthProvider>
        </body>
      </html>
    </StoreProvider>
  )
}
