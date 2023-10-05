const dotenv = require('dotenv')

if (process.env.NODE_ENV === 'development') {
  dotenv.config({ path: 'src/config/envs/.env.development' });
} else {
  dotenv.config({ path: 'config.env' });
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/chat',
  redirects: async () => {
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
