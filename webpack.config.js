// webpack.config.js
module.exports = {
  entry : './src/scripts/main.js',
  output: {
    path    : __dirname + '/dist/scripts/',
    publicPath: 'http://localhost:8090/assets', //webpack-dev-server用のアウトプットディレクトリ
    filename: 'bundle.js'
  },
  debug : false,
  cache : true,
  stats : {
    colors : true,
    reasons: true
  },
  module: {
    loaders: [{
      test  : /\.coffee$/,
      loader: 'jsx?harmony!!coffee'
    }, {
      test  : /\.js$/,
      loader: 'jsx-loader?harmony'
    }, {
      test  : /\.styl$/,
      loader: 'style!css!stylus'
    }]
  },
  externals: {
    // Reactをnpmからでなくグローバルから取得する
    'react': 'React'
  },
  resolve: {
    extensions: ['', '.js', '.json', '.coffee']
  }
};
