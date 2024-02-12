const nextConfig = {
  reactStrictMode: true,
};

if (process.env.NODE_ENV == "production") nextConfig.output = "export";

module.exports = nextConfig;
