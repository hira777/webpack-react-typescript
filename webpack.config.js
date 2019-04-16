// プラグインを利用するためにwebpackを読み込んでおく
const path = require('path');

module.exports = (env, argv) => {
  return {
    // エントリーポイントの設定
    entry: './src/index.tsx',
    output: {
      // 出力するファイル名
      filename: 'bundle.js',
      // 出力先のパス（絶対パスを指定する必要がある）
      path: path.resolve(__dirname, 'dist/')
      // publicPath: '/dist/'
    },
    module: {
      // ローダーの設定
      rules: [
        {
          // ローダーの処理対象ファイル
          test: /\.tsx?$/,
          // 利用するローダー
          use: {
            loader: 'ts-loader',
            options: { transpileOnly: true }
          },
          // ローダーの処理対象から外すディレクトリ
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      // ファイルをimportする時に
      // import File from '../path/to/file.ts';
      // を以下のように拡張子（今回の場合'.ts'と'.tsx'と'.js'）なしで読み込める。
      // import File from '../path/to/file';
      extensions: ['.ts', '.tsx', '.js', 'jsx']
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist/'),
      hot: true
    }
  };
};
