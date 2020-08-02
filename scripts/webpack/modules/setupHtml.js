// Core
import HtmlWebpackPlugin from "html-webpack-plugin";
import { readdirSync } from "fs";

// Constants
import { TEMPLATE, ASSETS } from "../utils/constants";

// Pages
const pages = readdirSync(TEMPLATE).filter((fileName) =>
  fileName.endsWith(".pug")
);

// Export
export const setupHtml = () => {
  return pages.map((page) => {
    if (page === "index.pug") {
      return new HtmlWebpackPlugin({
        filename: page.replace(/\.pug/, ".html"),
        title: "🚀 main page",
        template: `${TEMPLATE}/${page}`,
        favicon: `${ASSETS}/images/favicon.ico`,
      });
    }
    if (page === "about.pug") {
      return new HtmlWebpackPlugin({
        filename: page.replace(/\.pug/, ".html"),
        title: "🚀 about page",
        template: `${TEMPLATE}/${page}`,
        favicon: `${ASSETS}/images/favicon.ico`,
      });
    }
  });
};

console.log(pages);
