/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: () => {
    return [
      {
        source: "/",
        destination: "/en",
        permanent: true,
      },
    ];
  },
  env: {
    API_PROD_URL: "https://api.netflixtunisie.com/api/",
    // API_PROD_URL: "https://laravel.pixelstrap.net/fastkart/api/",
    PAYMENT_RETURN_URL: "http://204.216.214.207:3000",
    PAYMENT_CANCEL_URL: "http://204.216.214.207:3000/",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "laravel.pixelstrap.net",
      },
      {
        protocol: "https",
        hostname: "api.netflixtunisie.com",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        pathname: "**",
      }
    ],
  },
};

module.exports = nextConfig;
