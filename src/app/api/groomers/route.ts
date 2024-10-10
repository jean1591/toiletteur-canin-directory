import { NextRequest, NextResponse } from 'next/server'
import { endpointFormatter, logger } from '../utils/logger'

import { City } from '@/types/places'
import prisma from '@/lib/prisma'

export interface GroupedGroomersByCityDto {
  cities: City[]
}

export async function GET(
  request: NextRequest
): Promise<NextResponse<GroupedGroomersByCityDto>> {
  logger.info(endpointFormatter(request))

  const places = await prisma.place.groupBy({
    by: ['city'],
    _avg: {
      rating: true,
    },
    _count: {
      id: true,
    },
    orderBy: [
      {
        _count: {
          id: 'desc',
        },
      },
      {
        city: 'asc',
      },
    ],
  })

  const cities = places.map((cityGroup) => ({
    averageRating: cityGroup._avg.rating ?? 0,
    name: cityGroup.city,
    numberOfPlaces: cityGroup._count.id,
  }))

  return NextResponse.json({ cities })
}
