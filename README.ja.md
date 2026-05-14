# img-maker

OpenAI DALL-E APIを使用して画像を生成し、その結果をキャッシュするシンプルなDenoウェブサービスです。

## 機能

- テキストから画像を生成するシンプルなWeb APIエンドポイントを提供します。
- 生成された画像をローカルファイルシステム（`static/img/`）にキャッシュし、同じプロンプトでの後続のリクエスト時に即座に取得できるようにします。
- キャッシュファイル名にプロンプトの内容に基づくハッシュ値を使用します。

## 要件

- Denoランタイム
- OpenAI APIキー

## インストール

1. リポジトリをクローンします:
    ```sh
    git clone https://github.com/code4fukui/img-maker.git
    cd img-maker
    ```

2. `.env`ファイルを作成し、OpenAI APIキーを追加します:
    ```sh
    echo "OPENAI_API_KEY=sk-..." > .env
    ```

## 使い方

1. サーバーを起動します:
    ```sh
    deno serve -A --port 8888 img-maker.js
    ```
    これでサーバーが `http://localhost:8888` で起動します。

2. `prompt`クエリパラメータを指定してGETリクエストを送信し、画像を生成します。ブラウザや`curl`などのコマンドラインツールを使用できます。

    **ブラウザでの例:**
    以下のURLをウェブブラウザで開きます:
    ```
    http://localhost:8888/?prompt=a photo of an astronaut riding a horse on mars
    ```

    **cURLでの例:**
    ```sh
    curl "http://localhost:8888/?prompt=a white cat" -o cat.png
    ```

    サーバーは直接 `image/png` 形式で応答します。プロンプトが指定されていない場合は、デフォルト値が使用されます。

## バックグラウンドでの実行

`nohup` を使用してポート8000でサーバーをバックグラウンド起動するための便利なスクリプト `run.sh` が用意されています。

```sh
./run.sh
```

## ライセンス

MIT License
