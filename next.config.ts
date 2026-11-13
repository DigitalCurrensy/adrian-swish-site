import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // Vol. 13 says "The letter lives at adrianswish.xyz/valueandcompute".
        // Temporary (307) so this path can become a letter index later.
        source: "/valueandcompute",
        destination: "/newsletter/vol-13",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
