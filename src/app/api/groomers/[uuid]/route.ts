import { NextRequest, NextResponse } from 'next/server'
import { endpointFormatter, logger } from '../../utils/logger'

import { ApiError } from '../../dto/error'
import { Groomer } from '@/types/places'
import prisma from '@/lib/prisma'

export interface GroomerDto {
  groomer: Groomer
}

export async function GET(
  request: NextRequest,
  { params }: { params: { uuid: string } }
): Promise<NextResponse<GroomerDto | ApiError>> {
  logger.info(endpointFormatter(request))

  if (request.headers.get('apiKey') !== process.env.API_KEY) {
    const error = 'Forbidden: Invalid API Key'

    logger.error(endpointFormatter(request), error)
    return NextResponse.json({ error }, { status: 403 })
  }

  const groomer = await prisma.place.findUnique({
    where: {
      id: params.uuid,
    },
    include: { openingHours: true, reviews: true },
  })

  if (!groomer) {
    const error = `No groomer found for id ${params.uuid}`
    logger.error(endpointFormatter(request), error)
    throw new Error(error)
  }

  return NextResponse.json({ groomer })
}
