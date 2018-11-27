const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// exporting a function https://webpack.js.org/configuration/configuration-types/#exporting-a-function
module.exports = (env) => {
  const isProduction = env === 'production'
  const CSSExtract = new ExtractTextPlugin('styles.css')

  return {

    // entry: './src/app.js',
    // entry: './src/playground/redux101.js',
    entry: './src/playground/redux-expensify.js',
    // entry: './src/playground/destructuring.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: CSSExtract.extract({
            use: [
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                },
            ]
        })
      }]
    },
    plugins: [
      CSSExtract
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      open: true,
      openPage: ''
    }
  }
}
