// Core
import { CleanWebpackPlugin } from "clean-webpack-plugin";

// Constants
import { DIST_DIR, BUILD_DIR } from "../utils/constants";

// Export
export const cleanWebpack = (env) => {
  if (env === "development") {
    return new CleanWebpackPlugin({
      root: DIST_DIR,
      verbose: true,
    });
  }
  if (env === "production") {
    return new CleanWebpackPlugin({
      root: BUILD_DIR,
      verbose: true,
    });
  }
};
