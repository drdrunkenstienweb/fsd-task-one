// Core
import { merge } from "webpack-merge";

// Constants
import { BUILD_DIR } from "../utils/constants";

// Common Configuration File
import getCommonConfig from "./webpack.common";

export default () => {
  return merge(getCommonConfig(), {
    mode: "production",
    devtool: false,
    output: {
      filename: "[name].[contenthash].js",
      path: BUILD_DIR,
    },
  });
};
