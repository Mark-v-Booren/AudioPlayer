module.exports = {
    module: {
      rules: [
        {
          test: /\.(mp3)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192, // Convert files <= 8kb to base64 strings
                name: 'static/media/[name].[hash:8].[ext]',
              },
            },
          ],
        },
      ],
    },
  };

  