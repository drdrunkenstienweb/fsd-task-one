// Core
import { merge } from "webpack-merge";

// Constants
import { SRC_DIR } from "../utils/constants";

// Loaders
import * as modules from "../modules/index.js";

export default () => {
  const env = process.env.NODE_ENV;

  return merge(
    {
      entry: {
        main: [SRC_DIR],
      },
      plugins: [modules.cleanWebpack(env)],
      module: {
        rules: [modules.loadSass(), modules.pugConvert()],
      },
    },
    { plugins: modules.setupHtml() }
  );
};
