export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <div className="mx-auto my-20 min-h-screen px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  )
}
