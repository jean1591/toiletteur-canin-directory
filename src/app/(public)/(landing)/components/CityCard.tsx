'use client'

import { City } from '@/types/places'
import Image from 'next/image'
import Link from 'next/link'
import { PiMapPin } from 'react-icons/pi'
import { useState } from 'react'

export const CityCard = ({
  city,
  priority,
}: {
  city: City
  priority: boolean
}) => {
  const [isLoading, setLoading] = useState<boolean>(true)

  return (
    <Link
      href={`/toiletteur-a-${city.name.toLowerCase()}`}
      className="group relative block aspect-video overflow-hidden rounded-xl border border-stone-300 shadow-sm transition-shadow hover:shadow-lg"
    >
      <Image
        src={`/${city.name.toLowerCase()}.webp`}
        alt={`${city.name} background`}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        className={`object-cover transition-transform duration-300 group-hover:scale-105 ${
          isLoading
            ? 'scale-110 blur-2xl grayscale'
            : 'scale-100 blur-0 grayscale-0'
        }`}
        onLoad={() => setLoading(false)}
        priority={priority}
        loading={priority ? 'eager' : 'lazy'}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
      <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
        <div className="flex h-full items-center justify-center">
          <h2 className="text-center text-2xl font-bold capitalize drop-shadow-lg sm:text-3xl">
            {city.name}
          </h2>
        </div>
        <div className="flex items-center justify-between text-xs font-medium sm:text-sm">
          <p className="drop-shadow-lg">{city.averageRating.toFixed(1)} ⭐️</p>
          <div className="flex items-center gap-1">
            <p className="drop-shadow-lg">{city.numberOfPlaces}</p>
            <PiMapPin className="h-3 w-3 drop-shadow-lg sm:h-4 sm:w-4" />
          </div>
        </div>
      </div>
    </Link>
  )
}
