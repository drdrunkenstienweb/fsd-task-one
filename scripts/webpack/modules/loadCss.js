export const loadCss = () => {
  return {
    test: /\.css$/,
    use: [
      { loader: "style-loader", options: {} },
      { loader: "css-loader", options: { sourceMap: true } },
    ],
  };
};
