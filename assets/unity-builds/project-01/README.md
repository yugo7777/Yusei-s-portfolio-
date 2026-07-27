# project-01 のUnity WebGLビルド配置フォルダ

## 書き出し手順

1. Unityで `File > Build Settings` を開き、Platformを `WebGL` に切り替える
2. `Switch Platform` → `Build` を実行し、出力先にこのフォルダ(`assets/unity-builds/project-01/`)を指定する
3. ビルドが完了すると、このフォルダの直下に `index.html` と `Build/` `TemplateData/` などが生成される
4. `projects/project-01.html` 内の `#build` セクションにあるコメントアウトされた `<iframe>` を有効化する

```html
<iframe src="../assets/unity-builds/project-01/index.html"
        title="Unity WebGL Build" allowfullscreen></iframe>
```

## 注意点

- WebGLビルドは数十〜数百MBになることが多く、GitHubやGitHub Pagesでの公開に向かない場合があります。
  - GitHubは1ファイル100MBまで、リポジトリ全体でも1GB程度を推奨上限としています。
- 容量が大きい場合は [itch.io](https://itch.io/) にHTML5ゲームとしてアップロードし、
  `projects/project-01.html` の「itch.io で見る」ボタンのリンク先をそちらに変更する方法がおすすめです。
- GitHub Pagesで公開する場合、WebGL標準の圧縮設定(gzip/brotli)によっては
  `.gz` / `.br` ファイルのMIMEタイプが正しく配信されず real ブラウザで動かないことがあります。
  その場合はUnityの `Player Settings > Publishing Settings > Compression Format` を
  `Disabled` にしてビルドし直すと解決することが多いです。
