const { SkeletonPlugin } = require("page-skeleton-webpack-plugin");
const path = require("path");

module.exports = {
  configureWebpack: {
    plugins: [
      new SkeletonPlugin({
        pathname: path.resolve(__dirname, "./shell"),
        staticDir: path.resolve(__dirname, "./dist"),
        routes: ["/", "/about/test"]
      })
    ]
  },
  chainWebpack: config => {
    if (process.env.NODE_ENV !== "development") {
      config.plugin("html").tap(opts => {
        opts[0].minify.removeComments = false;
        return opts;
      });
    }
  }
};
