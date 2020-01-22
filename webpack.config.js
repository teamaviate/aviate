var config = {
    mode:'development',
    entry: './main.js',

   output: {
                path:'/',
                filename: 'index.js',
                },

  devServer: {
                      inline: true,
                      port: 7777
                   },

  module: {
                 rules: [ {
                              test: /\.jsx?$  \.css$/ ,
                              exclude: /node_modules/,
                              loader: 'babel-loader',
                              use: [
                                 { loader: "style-loader" },
                                 { loader: "css-loader" }
                               ],
                              options: {
                                              presets: ['@babel/preset-env',  '@babel/preset-react',"es2015",
                                              "react"]
                                             }
                          }]
               }
}

module.exports = config;