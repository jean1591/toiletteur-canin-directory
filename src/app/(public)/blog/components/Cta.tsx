import Link from 'next/link'

export const Cta = () => {
  return (
    <div className="space-y-8 rounded-xl bg-gradient-to-tr from-stone-200 to-stone-300 p-8">
      <p className="text-center text-lg font-medium leading-none tracking-tight">
        Besoin d'un toiletteur canin ? <br /> Trouver les meilleurs salons de
        toilettage sur notre site.
      </p>

      <div className="flex items-center justify-center">
        <Link
          href="/"
          className="rounded-lg bg-stone-800 px-8 py-4 text-xl font-bold leading-none tracking-tight text-stone-50"
        >
          Trouver un toiletteur
        </Link>
      </div>
    </div>
  )
}
