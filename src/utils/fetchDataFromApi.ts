import { headers } from 'next/headers'

export async function fetchDataFromApi<T>(endpoint: string): Promise<T> {
  const requestHeaders = headers()

  const baseUrl = process.env.NEXT_PUBLIC_API_URL
  const apiKey = process.env.API_KEY ?? ''

  const response = await fetch(`${baseUrl}/${endpoint}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      cookie: requestHeaders.get('cookie') || '',
      apiKey: apiKey,
    },
  })

  return response.json()
}
