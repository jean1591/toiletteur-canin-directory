'use client'

import { Article } from '@/types/articles'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export const ArticleCard = ({ article }: { article: Article }) => {
  const [isLoading, setLoading] = useState<boolean>(true)

  const { description, href, imgSrc, label, publishedAt } = article

  return (
    <div>
      <Link
        href={`/blog/${href}`}
        className="group relative block aspect-video overflow-hidden rounded-xl border border-stone-300 shadow-sm transition-shadow hover:shadow-lg"
      >
        <Image
          src={`/${imgSrc}.webp`}
          alt={`${label} background`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className={`object-cover transition-transform duration-300 group-hover:scale-105 ${
            isLoading
              ? 'scale-110 blur-2xl grayscale'
              : 'scale-100 blur-0 grayscale-0'
          }`}
          onLoad={() => setLoading(false)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
        <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
          <div className="flex h-full items-center justify-center">
            <h2 className="text-center text-xl font-bold capitalize drop-shadow-lg sm:text-2xl">
              {label}
            </h2>
          </div>
        </div>
      </Link>

      <div className="space-y-1">
        <p className="font-stone-500 text-left text-sm font-bold">
          {publishedAt}
        </p>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  )
}
