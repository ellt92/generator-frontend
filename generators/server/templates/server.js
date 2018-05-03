import express from "express";
import configureDevServer from "./config/webpackDevServer.js";

const app = express();

function getNodeEnv() {
  return "development";
}

const nodeEnv = getNodeEnv("NODE_ENV", "development");

if (nodeEnv === "production") {
  app.use(express.static("dist"));
} else {
  configureDevServer(app);
}

app.get("/", (req, res) => {
  res.render("dist/index.html");
});

const PORT_NUMBER = Math.round(Math.random() * 10000);
app.listen(PORT_NUMBER, () => {
  /* eslint-disable */
  console.log(
    `SystemB (${nodeEnv}) app listening on port http://localhost:${PORT_NUMBER}/!`
  );
  /* es-lint-enable */
});
