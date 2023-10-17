const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  future: {
    webpack5: true,
  },
  ...(isProduction && {
    // Cấu hình để tối ưu hóa và ghép nhất tệp CSS trong môi trường production
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.optimization.splitChunks.cacheGroups.styles = {
          name: "styles",
          test: /\.(css|scss)$/,
          chunks: "all",
          enforce: true,
        };
      }

      return config;
    },
  }),
};
