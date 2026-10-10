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

## デザイン方針(参考にしたメソッド)

見た目のルール(文字サイズ・余白・色・ターゲットサイズ)はデジタル庁デザインシステムを土台にした
ローカルルールで、`css/style.css` 冒頭の変数にまとめています。構成や文章の判断には、
PayPayとLINE(LINEヤフー)が公開しているデザインの考え方を参考にしています。

| 参考にした考え方 | 出典 | このサイトでの使い方 |
| --- | --- | --- |
| ユーザーファースト(まず「ユーザーにとって価値があるか」を問う) | PayPay | 読み手は採用担当者。氏名・担当範囲・連絡先を最初に読める位置に置く |
| スピード(早く出して、改善し続ける) | PayPay | 原則「早く試して、直し続ける」。作品ページで試作→プレイテスト→改修の流れを見せる |
| スタイルガイドで品質を個人の力量に依存させない | PayPay | 余白8の倍数・最小14px・ボタン高さ44px以上を変数として固定 |
| We are not the user(自分の好みでユーザーを推測しない) | LINE Design System | 原則「プレイヤーは自分ではない」。プレイテストの観察を判断の根拠として書く |
| 優先すべきタスクを明確にする | LINE Design System | 各カードに「担当:」を入れ、チーム制作での自分の役割を一目で分かるようにする |
| 継続的な体験 | LINE Design System | 全ページで同じナビゲーション。作品ページの最後に連絡先・ほかの作品への導線を置く |
| Clear Simplicity「より少なく、より豊かに。」 | LINEヤフー Design Style | 連絡先の帯の直下にあった重複リンクを削除。説明画面ではなく選択で伝えるという主張 |
| Perfect Quality「細部へのこだわりが、信頼を生む。」 | LINEヤフー Design Style | ナビゲーションも日英を切り替え、表記と言葉のトーンをそろえる |
| Fast Feedback | LINEヤフー Design Style | 声をもとに改善するプロセスを「考え方と進め方」セクションで明示 |

## GitHub Pagesでの公開方法

1. GitHubリポジトリの `Settings > Pages` を開く
2. `Source` を `Deploy from a branch` にし、公開したいブランチとルート(`/`)を選択する
3. 数分待つと `https://<ユーザー名>.github.io/<リポジトリ名>/` で公開される

## ローカルでの確認方法

ビルド不要なので、`index.html` をブラウザで直接開くか、
VS Codeの「Live Server」拡張機能などで確認できます。
