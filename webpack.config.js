module.exports = {
  entry: {
    app: [ './src/app.eg' ]
  },
  output: {
    path: './build',
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.eg/,
        loader: "earlgrey-loader",
        query: {
          es5: true,
          sourceMaps: 'inline'
        }
      },
      {
        test: /\.png/,
        loader: "url-loader?limit=8192"
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.eg']
  }
}
