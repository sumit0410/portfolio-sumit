/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Forces Next.js to build a static production export
  images: {
    unoptimized: true, // Required for static exports if using next/image
  },
};

export default nextConfig;
