# test

## URL

- 本番 [https://example.jp/](https://example.jp/)
- テスト [https://dev.example.jp/](https://dev.example.jp/) (`test` / `test`)

## 構成

- Vite + Sass
- Handlebars (テンプレートエンジン)

### テンプレートエンジン

[Handlebars](https://handlebarsjs.com/)を使用しています。

#### 変数の出力、コンポーネントの読み込み

- プロパティの出力： `{{プロパティ名}}`　 [出力など基本構文のリファレンス](https://handlebarsjs.com/guide/expressions.html)
- コンポーネントの呼び出し： `{{> ファイル名（拡張子なし）}}`　 [コンポーネントのリファレンス](https://handlebarsjs.com/guide/partials.html#basic-partials)
- 条件分岐： `{{#if hoge}} {{else}} {{/if}}`　[if 文のリファレンス](https://handlebarsjs.com/guide/builtin-helpers.html#if)

## 環境構築

```
$ npm i
```

## vite

vite を使用しています。

### 起動

開発用環境が立ち上がります。

```bash
$ npm run dev
```

### ビルド

dist ディレクトリが作成され、そちらに出力されます。

#### 開発環境用

```bash
$ npm run build:dev
```

#### 本番環境用

```bash
$ npm run build:prod
```

### ビルド後の確認

出力された dist のファイルをローカルで確認できます。

#### 開発環境用

```bash
$ npm run preview:dev
```

#### 本番環境用

```bash
$ npm run preview:prod
```