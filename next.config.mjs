/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: '/toiletteurs-a-:city', // URL users will see
        destination: '/toiletteurs/:city', // The internal dynamic route
      },
      {
        source: '/toiletteurs-a-:city/:name/:uuid', // URL users will see
        destination: '/toiletteurs/:city/:name/:uuid', // The internal dynamic route
      },
      {
        source: '/top-toiletteurs-a-:city', // URL users will see
        destination: '/toiletteurs/:city/top', // The internal dynamic route
      },
      {
        source: '/bons-toiletteurs-a-:city', // URL users will see
        destination: '/toiletteurs/:city/great', // The internal dynamic route
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
