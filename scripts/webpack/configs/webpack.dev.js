// Core
import { merge } from "webpack-merge";

// Constants
import { DIST_DIR } from "../utils/constants";

// Common Configuration File
import getCommonConfig from "./webpack.common";

export default () => {
  return merge(getCommonConfig(), {
    mode: "none",
    devtool: false,
    output: {
      filename: "[name].js",
      path: DIST_DIR,
    },
  });
};
