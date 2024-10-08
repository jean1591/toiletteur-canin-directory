import {
  PiGithubLogo,
  PiIdentificationBadge,
  PiLinkedinLogo,
  PiTwitterLogo,
} from 'react-icons/pi'

import Link from 'next/link'

export const Footer = () => {
  return (
    <div className="bg-stone-200 p-4 text-stone-500">
      <div className="flex items-center justify-center">
        <Link
          href="https://jeanrobertou.com"
          target="_blank"
          className="border-b-[1px] border-stone-500 text-center"
        >
          Jean Robertou
        </Link>
      </div>

      <div className="mt-4 flex items-center justify-center gap-x-4">
        <Link
          href="https://jeanrobertou.com"
          target="_blank"
          className="flex items-center justify-center"
        >
          <PiIdentificationBadge className="h-6 w-6" />
        </Link>
        <Link
          href="https://github.com/jean1591"
          target="_blank"
          className="flex items-center justify-center"
        >
          <PiGithubLogo className="h-6 w-6" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/robertoujean/"
          target="_blank"
          className="flex items-center justify-center"
        >
          <PiLinkedinLogo className="h-6 w-6" />
        </Link>
        <Link
          href="https://x.com/Jean_Robert_II/"
          target="_blank"
          className="flex items-center justify-center"
        >
          <PiTwitterLogo className="h-6 w-6" />
        </Link>
      </div>
    </div>
  )
}
