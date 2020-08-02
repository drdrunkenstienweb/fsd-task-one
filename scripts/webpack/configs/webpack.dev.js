// Core
import { merge } from "webpack-merge";
import { HotModuleReplacementPlugin } from "webpack";

// Constants
import { DIST_DIR } from "../utils/constants";

// Loaders
import * as modules from "../modules/index.js";

// Common Configuration File
import getCommonConfig from "./webpack.common";

export default () => {
  const env = process.env.NODE_ENV;

  return merge(
    getCommonConfig(),
    {
      mode: "none",
      devtool: false,
      devServer: {
        contentBase: "dist",
        overlay: true,
        hotOnly: true,
        hot: true,
        stats: {
          colors: true,
        },
      },
      entry: {
        main: ["webpack-hot-middleware/client"],
      },
      output: {
        filename: "[name].js",
        path: DIST_DIR,
      },
      plugins: [new HotModuleReplacementPlugin()],
    },
    modules.loadCss(env)
  );
};
