import Link from 'next/link'

export const BreadCrumbs = ({
  city,
  links,
}: {
  city: string
  links: { label: string; url: string }[]
}) => {
  return (
    <div className="flex items-center justify-start gap-2 text-lg">
      {links.map(({ label, url }) => (
        <Link
          key={label}
          href={url}
          className="border-b-[1px] border-b-stone-100 capitalize text-stone-500 hover:border-b-stone-600 hover:text-stone-600"
        >
          {label} /
        </Link>
      ))}
    </div>
  )
}
