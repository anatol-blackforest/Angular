module.exports = {
  context: __dirname + "/start",
  entry: {
    app: ["angular", "./data.js", "./module.js","./main-controller.js","./add-controller.js"],
  },
  output: {
    path: __dirname + "/final",
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: "babel-loader",
          options: { presets: ["es2015"] }
        }],
      },
    ],
  },
  devServer: {
    inline:true,
    port: 80
  },
};