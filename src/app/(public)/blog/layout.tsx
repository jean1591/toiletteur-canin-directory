import Link from 'next/link'

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Navbar />
      <div className="mx-4 my-12 max-w-3xl space-y-8 md:mx-auto">
        {children}
      </div>
    </div>
  )
}

const Navbar = () => {
  return (
    <div className="mx-4 max-w-3xl md:mx-auto">
      <div className="my-4 flex items-center justify-start gap-8 text-xl font-bold">
        <Link href="/">Accueil</Link>
        <Link href="/blog">Blog</Link>
      </div>
    </div>
  )
}
