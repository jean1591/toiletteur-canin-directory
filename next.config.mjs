/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: '/toiletteur-a-:city', // URL users will see
        destination: '/toiletteur/:city', // The internal dynamic route
      },
      {
        source: '/toiletteur-a-:city/:name/:uuid', // URL users will see
        destination: '/toiletteur/:city/:name/:uuid', // The internal dynamic route
      },
      {
        source: '/top-toiletteur-a-:city', // URL users will see
        destination: '/toiletteur/:city/top', // The internal dynamic route
      },
      {
        source: '/bon-toiletteur-a-:city', // URL users will see
        destination: '/toiletteur/:city/great', // The internal dynamic route
      },
    ]
  },
}

export default nextConfig

// TODO: parler de ça ☝🏼
// TODO: parler de ça ☝🏼
// TODO: parler de ça ☝🏼
// TODO: parler de ça ☝🏼
// Linkedin / Reddit / Twitter
