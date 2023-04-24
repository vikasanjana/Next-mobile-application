/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  serverRuntimeConfig: {
    connectionString: 'mongodb://127.0.0.1:27017/Mobile_Application_nextjs',
    secret: 'fa3305f1-fc41-4b9b-8d7d-543ce992d758'
  },
  publicRuntimeConfig: {
    apiUrl: process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000/api' // development api
        : 'http://localhost:3000/api' // production api
}
}

module.exports = nextConfig
