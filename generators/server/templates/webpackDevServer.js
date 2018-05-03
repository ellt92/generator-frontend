import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackConfig from "./webpack.config.dev";

export default function configureDevServer(app) {
  const compiler = webpack(webpackConfig);

  // eslint-disable-next-line global-require
  app.use(
    webpackDevMiddleware(compiler, {
      noInfo: true,
      publicPath: webpackConfig.output.publicPath,
      hot: true,
      stats: {
        colors: true,
        // this reduces the amount of stuff I see in my terminal; configure to your needs
        chunks: false,
        "errors-only": true
      }
    })
  );
  // eslint-disable-next-line global-require
  app.use(require("webpack-hot-middleware")(compiler));
}
