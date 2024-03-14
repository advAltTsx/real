/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: 'https://irl.abhyudaya.xyz',
            destination: '/home',
            permanent: true,
          },
        ]
      },
};

export default nextConfig;
