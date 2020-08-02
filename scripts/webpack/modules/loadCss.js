// Core
import MiniCssExtractPlugin from "mini-css-extract-plugin";

// Constants
import { MODULES } from "../utils/constants";

export const loadCss = (env) => {
  if (env === "production") {
    return {
      plugins: [
        new MiniCssExtractPlugin({
          filename: "[name].css",
        }),
      ],
      module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              { loader: MiniCssExtractPlugin.loader, options: {} },
              { loader: "css-loader", options: { sourceMap: true } },
              {
                loader: "postcss-loader",
                options: {
                  config: {
                    path: `${MODULES}/postcss.config.js`,
                  },
                },
              },
            ],
          },
        ],
      },
    };
  } else
    return {
      module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              { loader: "style-loader", options: {} },
              { loader: "css-loader", options: { sourceMap: true } },
              {
                loader: "postcss-loader",
                options: {
                  config: {
                    path: `${MODULES}/postcss.config.js`,
                  },
                },
              },
            ],
          },
        ],
      },
    };
};

export const loadSass = () => {
  return {
    test: /\.s[ac]ss$/,
    use: [
      { loader: "style-loader", options: {} },
      { loader: "css-loader", options: { sourceMap: true } },
      { loader: "sass-loader", options: {} },
    ],
  };
};
