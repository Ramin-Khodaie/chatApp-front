/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath:'/chat',
  redirects:async ()=>{
    return [
      {
        source: '/chat',
        destination: '/',
        permanent: true,
      },
    ];
  }
}

module.exports = nextConfig
