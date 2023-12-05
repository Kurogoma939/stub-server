## 起動コマンド

```bash
docker-compose up --build -d
```

# 使いかた

### 1. エンドポイントに合わせてファイルを作る。

エンドポイントが`/api/v1/hoge`の場合、`api-v1-hoge.js`を作る。

### 2. 上記で作成した json は、返却して欲しい json を記述する。

```json
{
  "status": 200,
  "body": {
    "message": "Hello World"
  }
}
```

### 3. 動作確認

エンドポイントは`http://localhost:3003/path`になります。

### 4. TEST
- test commit