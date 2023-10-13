// Viteとその他のモジュールをインポート
import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  // 現在のモードが本番環境かどうかを確認
  const isProduction = mode === 'production';

  // 環境に応じたURLを設定
  const siteUrl = isProduction
    ? 'https://example.jp' // 本番環境のURL
    : 'https://dev.example.jp'; // 開発環境のURL

  // 各ページのデータ設定
  const pageData = {
    '/index.html': {
      title: 'サイト名',
      description: 'ディスクリプション',
      url: siteUrl,
      ogimage: `${siteUrl}/share.png`,
    },
    '/about/index.html': {
      title: 'ページ名',
      description: 'ディスクリプション',
      url: `${siteUrl}/about/`,
      ogimage: `${siteUrl}/share.png`,
    },
  };

  // Viteの設定を返す
  return {
    root: './src', // 開発の基準となるディレクトリ
    build: {
      outDir: '../dist', // ビルドした際の出力ディレクトリ
      rollupOptions: {
        // rollupのビルド設定
        output: {
          assetFileNames: (assetInfo) => {
            let extType = assetInfo.name.split('.')[1];
            // 拡張子によってファイルタイプを振り分け
            if (/ttf|otf|eot|woff|woff2/i.test(extType)) {
              extType = 'fonts';
            }
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
              extType = 'images';
            }
            // CSSファイルのパスを特定
            if (extType === 'css') {
              return `assets/css/style.css`;
            }
            return `assets/${extType}/[name][extname]`;
          },
          chunkFileNames: 'assets/js/[name].js',  // チャンクファイルのパス
          entryFileNames: 'assets/js/main.js',   // エントリーファイルのパス
        },
        input: {
          main: resolve(__dirname, './src/index.html'),  // 入力HTMLファイルのパス(Top)
          about: resolve(__dirname, './src/about/index.html'),  // 入力HTMLファイルのパス(About)
        },
      },
    },
    plugins: [
      handlebars({
        // handlebarsプラグインの設定
        partialDirectory: resolve(__dirname, './src/components/'),  // パーシャルのディレクトリ指定
        context(pagePath) {
          return pageData[pagePath];  // 各ページのデータを取得
        },
      }),
    ],
    server: {
      host: true,  // ホストを動的に取得
    },
  };
});
