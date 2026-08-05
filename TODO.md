# ポートフォリオ 差し替えTODOリスト

サンプル文言・未入力のプレースホルダーを実際の内容に差し替えるための作業リストです。
AIに作業を依頼する場合は、この`TODO.md`をそのまま渡せば「どのファイルの何行目を、何にすべきか」が分かる形式になっています。

## 共通ルール(必ず読むこと)

1. **このサイトは日本語/英語切り替え対応**です。`class="lang-ja"` と `class="lang-en"` はほぼ必ずセットで存在します。文章を直すときは**両方**書き換えてください。
2. 「〜を配置」と書かれている項目は、テキスト編集だけでなく実ファイル(PDF/動画/画像/Unityビルド)を指定フォルダに置く作業も必要です。フォルダ内の `README.md` に置き方の詳細があります。
3. チェックが付いていない項目 `[ ]` が未対応、`[x]` が対応済みです。

---

## index.html(トップページ)

- [x] 専門分野バッジ、自己紹介、制作スタンス、使用ツール、所属、代表作カード、Works一覧カードA/B、ジャンルフィルターを実内容に更新済み
- [x] Emailを実際のアドレスに変更済み
- [x] itch.io(https://yugo589.itch.io)のリンクを設定済み
- [ ] X (Twitter)・GitHubのリンク先URLが未定(現在プレースホルダーのまま)。使う場合はURLを、使わない場合はリンクごと削除

---

## projects/project-01.html(ECO DEFENDERS)

- [x] タイトルを正式名称「ECO DEFENDERS」に変更済み
- [x] 一言ピッチ・メタ情報(ジャンル/担当/使用ツール)を実際の内容に更新済み
- [x] 制作期間(2025年7月〜11月)・制作人数(4人)を記載済み
- [x] 担当を「企画/GDD作成/アビリティ設計/UI設計/コーディング」に更新済み
- [x] 制作プロセス4ステップを実際の流れ(CSQブリーフ→企画→プレイテスト→完成)に更新済み
- [x] 企画の背景・工夫した点・チームでの役割・学んだことを更新済み
- [x] Play映像:Google Driveの動画を埋め込み済み
- [x] スクリーンショット6点を `assets/images/project-01/` に配置し`<img>`で表示済み
      (IGB200 Final Presentationのpptxから抽出)
- [x] 資料6点を `docs/project-01/` にHTMLページとして公開済み
      (ブリーフ分析/アイデア書/ペーパープロトタイプ/GDD/スキル設計/プレイテスト記録)
- [ ] Unity WebGLビルド:`assets/unity-builds/project-01/` にビルド一式を配置してiframeを有効化
      (現在は「準備中」表示。itch.ioを使う場合はそちらへのリンクに変更)
- [ ] Balance Sheet(xlsx)は未掲載。載せる場合はHTMLの表に変換して資料セクションに追加

---

## projects/project-02.html(Project Subject(仮))

- [x] タイトル・一言ピッチ・メタ情報(ジャンル/担当/使用ツール)を更新済み
- [x] 制作プロセス4ステップの説明文を更新済み
- [x] 企画の背景・工夫した点・チームでの役割・学んだこと/今後の課題を更新済み
- [x] スクリーンショットのキャプション文を更新済み(画像自体は未配置)
- [ ] 制作期間・制作人数が `[制作期間を入力]` `[チーム人数を入力]` のまま(確定したら差し替え)
- [ ] Play映像:YouTube動画を埋め込むか `assets/videos/project-02/` に動画ファイルを配置してiframe/videoタグを有効化
- [ ] Unity WebGLビルド:`assets/unity-builds/project-02/` にビルド一式を配置してiframeを有効化
- [ ] itch.ioボタンのリンクが `href="#"` のまま
- [ ] 資料セクションのPDF3点(アイデア書/企画書/試作書)を `assets/docs/project-02/` に配置
- [ ] スクリーンショット画像本体を `assets/images/project-02/` に配置し、gallery-itemを`<img>`タグに差し替え

---

---

## projects/project-03.html(Deepspace Cybercourt、企画名「HIT & ROLL」)

- [x] 新規プロジェクトとして追加済み(project-02とは別作品)
- [x] タイトル・一言ピッチ・メタ情報(ジャンル/担当/使用ツール)を実際の内容に更新済み
- [x] 制作期間(2026年2月〜5月)・制作人数(4人)を記載済み
- [x] 担当を「ラケットのSFX/VFX実装・物理挙動調整・グリップ操作のコーディング」に更新済み
- [x] 制作プロセス4ステップ(企画→転換→プレイテスト→完成)を実際の流れに更新済み
- [x] 企画の背景・工夫した点・チームでの役割・学んだことを更新済み
- [x] Play映像:Google Driveの動画を埋め込み済み
- [x] スクリーンショット6点を `assets/images/project-03/` に配置し表示済み
- [x] 資料3点を `docs/project-03/` にHTMLページとして公開済み
      (企画フィードバック/最終GDD/SFX・VFXプレイテスト記録)
- [x] index.htmlのWorksに追加、フィルターに「VR Sports」を追加済み
- [x] Unity(Meta Quest 2)ビルド:itch.io(https://yugo589.itch.io/deepspace-cybercourt)へのリンクに変更済み

---

## projects/project-04.html(Hollowstead、企画名「Demontide Cleansing」)

- [x] 新規プロジェクトとして追加済み(IGB100 Team 8のCycle 2ミニゲーム)
- [x] タイトル・一言ピッチ・メタ情報(ジャンル/担当/使用ツール)を実際の内容に更新済み
- [x] 制作期間(2025年2月〜5月)・制作人数(8人)を記載済み
- [x] 担当を「チャーム/スキルのアイデア考案・コーディング実装」に更新済み
- [x] 制作プロセス4ステップ(企画→紙プロトタイプ→週次実装→仕上げ)を実際の流れに更新済み
- [x] 企画の背景・工夫した点・チームでの役割・学んだことを更新済み
- [x] Play映像:Google Driveの動画を埋め込み済み
- [x] スクリーンショット6点を `assets/images/project-04/` に配置し表示済み
- [x] 資料3点を `docs/project-04/` にHTMLページとして公開済み
      (チームGDD/ストーリーボード・紙プロトタイプ/週次スクラム進捗報告)
- [x] index.htmlのWorksに追加、フィルターに「Roguelite」を追加済み
- [ ] Unity WebGLビルド:`assets/unity-builds/project-04/` にビルド一式を配置してiframeを有効化
      (現在は「準備中」表示。itch.ioを使う場合はそちらへのリンクに変更)
- [ ] ギャラリー1枚目を実際の完成版タイトル画面(「HOLLOWSTEAD - SURVIVAL GAME」のピクセルアート画面)に差し替え
      (画像ファイルをアップロードしてもらい次第、`assets/images/project-04/start-screen.jpg` を置き換え。現在は紙プロトタイプのMain/Start Menuスケッチのまま)

---

## 残っている作業の進め方の目安

1. **project-02(Project Subject)** の制作期間・制作人数・実際の資料/映像/画像を用意する
   (project-01と同じ手順で対応できます)
2. project-01・project-03のUnity/VRビルドを書き出し、`assets/unity-builds/` に配置するか
   itch.ioにアップロードしてリンクを差し替え
3. X・itch.io・GitHubのアカウントが決まり次第、index.htmlの連絡先リンクを更新
   (未定のままなら、そのリンクは削除したほうが安全)

## 資料ページの追加方法(project-01で使った手順)

Wordファイルは `mammoth` でHTMLに変換し、`docs/project-01/` に
サイト共通のヘッダー+ `docs/doc.css` を付けたページとして配置しています。
画像は `docs/project-01/media/` に個別ファイルとして書き出されます。
新しい資料を足す場合も同じ方法で追加し、project-01.htmlの
`doc-grid` にカードを1枚増やしてください。
