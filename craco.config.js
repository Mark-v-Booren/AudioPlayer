// craco.config.js or webpack.config.js
module.exports = {
    module: {
      rules: [
        {
          test: /\.(mp3)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'static/media/[name].[hash:8].[ext]',
              },
            },
          ],
        },
      ],
    },
  };