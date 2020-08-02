import webpack from "webpack";
import middleware from "webpack-dev-middleware";
import hot from "webpack-hot-middleware";

import getDevConfig from "../configs/webpack.dev";
const config = getDevConfig();
const compiler = webpack(config);
import express from "express";
const app = express();

app.use(middleware(compiler, config.devServer));
app.use(
  hot(compiler, {
    log: console.log,
    path: "/__webpack_hmr",
  })
);

app.listen(3000, () => console.log("Example app listening on port 3000!"));
