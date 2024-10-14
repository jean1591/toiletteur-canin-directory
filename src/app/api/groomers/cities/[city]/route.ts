import { NextRequest, NextResponse } from 'next/server'
import { endpointFormatter, logger } from '@/app/api/utils/logger'

import { ApiError } from '@/app/api/dto/error'
import { Groomer } from '@/types/places'
import { GroomersByCityDto } from '@/app/api/dto/groomers'
import prisma from '@/lib/prisma'

export async function GET(
  request: NextRequest,
  { params }: { params: { city: string } }
): Promise<NextResponse<GroomersByCityDto | ApiError>> {
  logger.info(endpointFormatter(request))

  if (request.headers.get('apiKey') !== process.env.API_KEY) {
    const error = 'Forbidden: Invalid API Key'

    logger.error(endpointFormatter(request), error)
    return NextResponse.json({ error }, { status: 403 })
  }

  const groomers: Groomer[] = await prisma.place.findMany({
    where: {
      city: {
        equals: params.city,
        mode: 'insensitive',
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
