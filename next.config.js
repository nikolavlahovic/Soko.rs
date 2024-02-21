const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "coresites-cdn-adm.imgix.net",
        port: "",
        pathname: "mpora_new/",
      },
    ],
  },
};

module.exports = nextConfig;
