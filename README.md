# Voice Input Pro 待機リストサイト

依存なしの静的サイトです。`index.html` をブラウザで直接開けます。

## フォームURLの設定

Google Formsを作成したら、`config.js` に公開URLを入れます。

```js
window.VOICE_INPUT_PRO_WAITLIST = {
  GOOGLE_FORM_URL: "https://forms.gle/...",
  CONTACT_LABEL: ""
};
```

`GOOGLE_FORM_URL` が空の場合、CTAは「フォーム準備中」と表示され、外部送信されません。

## 公開前チェック

- Google Form URLが正しい。
- Google Forms側でメールアドレス収集が有効。
- 回答がGoogle Sheetsに保存される。
- ページにZIPダウンロード、有料購入、Gumroad決済リンクがない。
- 「公証済み正式版は未リリース」「OpenAI APIキーは利用者自身が用意」「ベータは無料・少人数・同意あり」が明記されている。

## GitHub Pagesで公開する場合

GitHub Pagesの公開元を `waitlist-site/` 相当の静的ファイルに向けます。リポジトリ構成により、`docs/` 配下へコピーするか、専用ブランチで公開してください。
