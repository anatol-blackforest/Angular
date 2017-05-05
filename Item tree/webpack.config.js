const webpack = require("webpack");

module.exports = {
  context: __dirname + "/start",
  entry: {
    app: ["angular", "./module.js","./main-controller.js","./add-controller.js"],
  },
  output: {
    path: __dirname + "/final",
    filename: "index.js",
  },
  devServer: {
    inline:true,
    port: 80
  },
};