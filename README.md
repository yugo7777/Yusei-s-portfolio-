# Yusei's Game Design Portfolio

ゲームデザイン専攻の学生向けポートフォリオサイトです。
制作した各ゲームについて、企画書・アイデア書・試作書などの資料、Play映像、
実際に遊べるUnity WebGLビルドをまとめて公開できる構成になっています。

素のHTML/CSS/JSのみで作られており、ビルド不要でそのままGitHub Pagesに公開できます。

## サイト構成

```
index.html                        トップページ(自己紹介・作品一覧・連絡先)
css/style.css                     全体のスタイル
js/main.js                        モバイルメニューの開閉など
projects/
  project-01.html                 作品詳細ページ(サンプル)
assets/
  docs/project-XX/                企画書・アイデア書・試作書(PDF等)
  videos/project-XX/              Play映像(動画ファイルを直接置く場合)
  unity-builds/project-XX/        Unity WebGLビルドの出力一式
  images/project-XX/              スクリーンショット・サムネイル画像
```

各 `assets/*/project-XX/` フォルダには、何をどう置けばよいかを説明した
`README.md` を用意しています。迷ったらまずそちらを確認してください。

## 新しい作品を追加する手順

1. `projects/project-01.html` をコピーして `projects/project-03.html` のような名前で保存する
2. タイトル・ピッチ・メタ情報(ジャンル/制作期間/人数/担当/ツール)を書き換える
3. `assets/docs/project-03/` `assets/videos/project-03/` `assets/unity-builds/project-03/`
   `assets/images/project-03/` フォルダを作成し、資料・映像・ビルド・画像を配置する
4. ページ内のコメント(`★編集ポイント`)に従って、リンク先やiframeを実データに差し替える
5. `index.html` の `#works` セクションに作品カードを1つ追加し、
   `href` を新しく作った詳細ページに向ける

## コンテンツの置き方まとめ

- **企画書・アイデア書・試作書**: PDFにして `assets/docs/project-XX/` に配置し、
  各詳細ページの「資料」セクションからダウンロード/閲覧リンクを張る
- **Play映像**: YouTube(限定公開可)にアップロードして `<iframe>` で埋め込むのが手軽。
  短い動画ならファイルを直接 `assets/videos/project-XX/` に置くことも可能
- **Unityビルド**: `File > Build Settings > WebGL` で書き出し、
  `assets/unity-builds/project-XX/` に出力一式を配置して `<iframe>` で埋め込む。
  容量が大きい場合は [itch.io](https://itch.io/) にアップロードしてリンクする方法がおすすめ

## 日本語/英語の切り替え(ローカライズ)

サイト右上の「JA / EN」ボタンで表示言語を切り替えられます(選択はブラウザに保存され、
別のページに移動しても保持されます)。実装は1つのHTMLファイルの中に日本語・英語の両方を
書いておき、CSSで表示/非表示を切り替える方式です。

```html
<h2>
  <span class="lang-ja">自己紹介</span>
  <span class="lang-en">About Me</span>
</h2>
```

新しく文章を追加・編集するときは、上記のように `lang-ja` / `lang-en` を持つ要素を
セットで用意してください(英語がまだ書けない場合は `lang-en` 側だけ後で埋めてもサイトは
壊れません。日本語のみ表示され続けます)。ページのタイトルを切り替えたい場合は
`<body>` タグに `data-title-ja` / `data-title-en` 属性を追加してください。

## GitHub Pagesでの公開方法

1. GitHubリポジトリの `Settings > Pages` を開く
2. `Source` を `Deploy from a branch` にし、公開したいブランチとルート(`/`)を選択する
3. 数分待つと `https://<ユーザー名>.github.io/<リポジトリ名>/` で公開される

## ローカルでの確認方法

ビルド不要なので、`index.html` をブラウザで直接開くか、
VS Codeの「Live Server」拡張機能などで確認できます。
