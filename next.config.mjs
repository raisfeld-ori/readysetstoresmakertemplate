  /** @type {import('next').NextConfig} */
  const nextConfig = {
      images: {
        domains: ['picsum.photos', 'lucid-vision-production-a58a.up.railway.app', 'images.unsplash.com', 'res.cloudinary.com'],
      },
      experimental: {
        serverActions: {
          bodySizeLimit: '50mb',
        }
      }
  }

  export default nextConfig;
