import { NextRequest, NextResponse } from 'next/server'
import { endpointFormatter, logger } from '../utils/logger'

import { getSession } from '../auth/[...nextauth]/authOptions'

export interface DashboardDto {
  example: string
}

export async function GET(
  request: NextRequest
): Promise<NextResponse<DashboardDto>> {
  logger.info(endpointFormatter(request))

  const session = await getSession()

  if (!session) {
    const error = new Error('The user has no session')
    logger.error(endpointFormatter(request), error)
    throw error
  }

  const {
    user: { id: userId },
  } = session

  return NextResponse.json({ example: userId })
}
