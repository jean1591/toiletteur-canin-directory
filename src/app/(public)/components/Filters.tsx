import Link from 'next/link'

export const Filters = ({ city }: { city: string }) => {
  const filters = ['tous', 'top 5', '> 4.5 ⭐️']

  return (
    <div className="flex items-center justify-start gap-2">
      {filters.map((filter) => {
        let href = ''

        switch (filter) {
          case 'tous':
            href = `/toiletteurs-a-${city.toLowerCase()}`
            break
          case 'top 5':
            href = `/top-toiletteurs-a-${city.toLowerCase()}`
            break
          case '> 4.5 ⭐️':
            href = `/bons-toiletteurs-a-${city.toLowerCase()}`
            break
          default:
            break
        }

        return (
          <Link
            key={filter}
            href={href}
            className="rounded-xl border-[1px] border-stone-300 bg-white px-4 py-1 capitalize shadow-lg"
          >
            {filter}
          </Link>
        )
      })}
    </div>
  )
}
