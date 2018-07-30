const path = require("path");
const TSDocgenPlugin = require("react-docgen-typescript-webpack-plugin");
const autoprefixer = require("autoprefixer");

module.exports = (baseConfig, env) => {
  baseConfig.module.rules.push({
    test: /\.css$/,
    use: [
      require.resolve('style-loader'),
      {
        loader: require.resolve('css-loader'),
        options: {
          importLoaders: 1,
        },
      },
      {
        loader: require.resolve('postcss-loader'),
        options: {
          ident: 'postcss',
          postcss: {},
          plugins: () => [
            require('postcss-flexbugs-fixes'),
            autoprefixer({
              flexbox: 'no-2009',
            }),
          ],
        },
      },
    ],
  },),
  baseConfig.module.rules.push({
    test: /\.(ico|jpg|jpeg|png|gif|svg|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
    loader: require.resolve('file-loader'),
    query: {
      name: 'static/media/[name].[hash:8].[ext]',
    },
  });
  baseConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("awesome-typescript-loader")
  });
  baseConfig.plugins.push(new TSDocgenPlugin()); // optional
  baseConfig.resolve.extensions.push(".ts", ".tsx");
  return baseConfig;
};
