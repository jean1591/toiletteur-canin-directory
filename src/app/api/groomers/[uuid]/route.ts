import { NextRequest, NextResponse } from 'next/server'
import { endpointFormatter, logger } from '../../utils/logger'

import { Groomer } from '@/types/places'
import prisma from '@/lib/prisma'

export interface GroomerDto {
  groomer: Groomer
}

export async function GET(
  request: NextRequest,
  { params }: { params: { uuid: string } }
): Promise<NextResponse<GroomerDto>> {
  logger.info(endpointFormatter(request))

  const groomer = await prisma.place.findUnique({
    where: {
      id: params.uuid,
    },
    include: { openingHours: true, reviews: true },
  })

  if (!groomer) {
    const error = new Error(`No groomer found for id ${params.uuid}`)
    logger.error(endpointFormatter(request), error)
    throw error
  }

  return NextResponse.json({ groomer })
}
