export const pugConvert = () => {
  return {
    test: /\.pug$/,
    use: {
      loader: "pug-loader",
      options: {},
    },
  };
};
