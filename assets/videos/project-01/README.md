# project-01 のPlay映像フォルダ

Play映像の配置方法は2通りあります。

## 方法A: YouTube / Vimeo にアップロードする(推奨)

動画ファイルはサイズが大きく、GitHubのリポジトリに直接置くと重くなるため、
YouTube(限定公開でも可)やVimeoにアップロードし、`projects/project-01.html` の
`#video` セクションにあるコメントを参考に `<iframe>` の埋め込みタグに差し替えてください。

## 方法B: 動画ファイルを直接置く

数十MB程度の短い動画であれば、このフォルダに `play.mp4` として配置し、
`projects/project-01.html`内のコメントアウトされている `<video>` タグを有効化してください。

GitHubは1ファイル100MBの制限があるため、長時間・高画質の動画は方法Aを推奨します。
