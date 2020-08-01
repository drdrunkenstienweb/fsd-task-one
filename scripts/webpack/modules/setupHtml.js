// Core
import HtmlWebpackPlugin from "html-webpack-plugin";

// Constants
import { TEMPLATE } from "../utils/constants";

// Export
export const setupHtml = () => {
  return new HtmlWebpackPlugin({
    filename: "index.html",
    title: "🚀 FSD first task",
    template: TEMPLATE,
  });
};
