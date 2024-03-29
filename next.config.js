if (!process.env.WORDPRESS_API_URL) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `)
}

/** @type {import('next').NextConfig} */

const withOffline = require("next-offline")

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  basePath: process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH : "",
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  images: {
    domains: [
        "localhost",
        "admin.marketingmedia.solutions",
        process.env.WORDPRESS_API_URL.match(/(http(?:s)?:\/\/)(.*)/)[2], // Valid WP Image domain.
        "2.gravatar.com",
        "0.gravatar.com",
        "secure.gravatar.com",
    ],
  },
  
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

 typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  
};

module.exports = withOffline(nextConfig, {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/v1':'',
  workboxOpts: {
    runtimeCaching: [
      {
        urlPattern: /(https?:\/\/.*\.(?:png|jpg|jpeg|svg|gif|woff|woff2|ttf|eot))/,
        handler: 'CacheFirst',
      },
    ],
  },
});




