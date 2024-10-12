import { NextRequest, NextResponse } from 'next/server'
import { endpointFormatter, logger } from '@/app/api/utils/logger'

import { Groomer } from '@/types/places'
import { GroomersByCityDto } from '@/app/api/dto/groomers'
import prisma from '@/lib/prisma'

export async function GET(
  request: NextRequest,
  { params }: { params: { city: string } }
): Promise<NextResponse<GroomersByCityDto>> {
  logger.info(endpointFormatter(request))

  const groomers: Groomer[] = await prisma.place.findMany({
    where: {
      city: {
        equals: params.city,
        mode: 'insensitive',
      },
      rating: {
        gte: 4.5,
      },
    },
    include: { openingHours: true, reviews: true },
    orderBy: [
      {
        rating: {
          sort: 'desc',
        },
      },
      {
        userRatingCount: {
          sort: 'desc',
        },
      },
    ],
  })

  return NextResponse.json(modelToGroomersByCity({ groomers }))
}

const modelToGroomersByCity = ({
  groomers,
}: {
  groomers: Groomer[]
}): GroomersByCityDto => {
  return {
    groomers: groomers.map((groomer) => ({
      id: groomer.id,
      formattedAddress: groomer.formattedAddress,
      name: groomer.name,
      rating: groomer.rating,
      userRatingCount: groomer.userRatingCount,
    })),
  }
}
