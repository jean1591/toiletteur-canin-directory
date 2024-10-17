import { Footer } from './components/Footer'

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <div className="mx-auto min-h-screen px-4 sm:px-6 lg:px-8">
        {children}
      </div>

      <Footer />
    </div>
  )
}
