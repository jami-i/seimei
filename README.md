
# 姓名判断します

## 必要なもの

- nodejs (v4.0.0で動作確認)

## 使い方

標準入力で受け取った姓名を判断します。

### 例)

`echo '石川 修' | node index | jq . `

引数に姓を指定することで姓を固定できます。

`echo '修' | node index 石川 | jq .`

このコマンドは上の例と等価です。

## TBD

- ひらがな・カタカナへの対応

