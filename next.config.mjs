/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: '/toiletteurs-a-:city', // URL users will see
        destination: '/toiletteurs/:city', // The internal dynamic route
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
