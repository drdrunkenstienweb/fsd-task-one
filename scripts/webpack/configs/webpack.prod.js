// Core
import { merge } from "webpack-merge";

// Constants
import { BUILD_DIR } from "../utils/constants";

// Common Configuration File
import getCommonConfig from "./webpack.common";

// Loaders
import * as modules from "../modules/index.js";

export default () => {
  const env = process.env.NODE_ENV;

  return merge(
    getCommonConfig(),
    {
      mode: "production",
      devtool: false,
      output: {
        filename: "[name].[contenthash].js",
        path: BUILD_DIR,
      },
    },
    modules.loadCss(env)
  );
};
