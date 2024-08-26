/** @type {import('next').NextConfig} */
import withVideos from "next-videos";
const nextConfig = {
    images: {
        domains: ['d1muf25xaso8hp.cloudfront.net'],
      }
};

// export default {...nextConfig,...withVideos};
export default withVideos(nextConfig);




