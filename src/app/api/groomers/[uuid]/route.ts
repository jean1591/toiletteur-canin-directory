import { NextRequest, NextResponse } from 'next/server'

import { Groomer } from '@/types/places'
import prisma from '@/lib/prisma'

export interface GroomerDto {
  groomer: Groomer
}

export async function GET(
  request: NextRequest,
  { params }: { params: { uuid: string } }
): Promise<NextResponse<GroomerDto>> {
  console.info('[GET] /groomers/[uuid]')

  const groomer = await prisma.place.findUnique({
    where: {
      id: params.uuid,
    },
    include: { openingHours: true, reviews: true },
  })

  if (!groomer) {
    throw new Error(`No groomer found for id ${params.uuid}`)
  }

  return NextResponse.json({ groomer })
}
