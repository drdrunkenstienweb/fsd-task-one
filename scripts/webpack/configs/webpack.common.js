// Constants
import { SRC_DIR } from "../utils/constants";

// Loaders
import * as modules from "../modules/index.js";

export default () => {
  const env = process.env.NODE_ENV;

  return {
    entry: {
      main: SRC_DIR,
    },
    plugins: [modules.setupHtml(), modules.cleanWebpack(env)],
    module: {
      rules: [modules.loadCss()],
    },
  };
};
