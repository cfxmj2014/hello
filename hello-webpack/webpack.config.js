var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  // context: 就是切换当前目录，由于设置了context, 那么 ./utils.js 就是 ./js/utils.js
  // context: path.resolve('js'),
  entry: {
    utils: './js/utils.js',
    main: './js/main.js'
  },
  output: {
    path: path.resolve('build/js/'),
    // publicPath: html里面引用js时要这样 /public/assets/js/main.js, 这个主要是为了给我们将来生产环境使用CDN用，虽然我们build到 build/js/main.js, 但我们html里面写/public/assets/js/main.js 依然能正常使用，是因为我们webpack-dev-server做了处理。
    publicPath: '/public/assets/js/',
    filename: '[name].js'
  },
  // devServer:contentBase: 就是说开发的时候，我们的html页面从哪个目录提供。
  devServer: {
    contentBase: 'views'
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'jshint'
    }],
    // loaders是一个数组，是webpack使用的loader的集合，上面的意思就是 使用babel-loader处理所有以.js后缀的文件，但是忽略node_modules下的。 query参数是指babel使用的参数。
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: [
          'es2015'
        ]
      }
    },
    {
      test: /\.css$/,
      exclude: /node_modules/,
      // webpack对一个文件可以使用多个loader,顺序是从右向左，中间用!分开...
      // loader: 'style!css'
      loader: ExtractTextPlugin.extract("style-loader", "css-loader")
    },
    {
      test: /\.(jpg|jpeg|png|gif)$/,
      include: /images/,
      loader: 'url'
    }

  ]
},
jshint: {
  "failOnHint": true,
  'esnext': true,
},
plugins: [
  new ExtractTextPlugin("styles.css", {
    allChunks: false
  })
]
};
