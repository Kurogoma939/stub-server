const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const dataDirectory = path.join(__dirname, 'data');

app.use(express.json());  // POST リクエストのボディを解析するために必要

// 共通の関数でファイルを読み込む
const handleRequest = (req, res) => {
    // エンドポイントのスラッシュをハイフンに置換し、.json拡張子を追加
    const fileName = req.path.replace(/\//g, '-').substring(1) + '.json';
    const filePath = path.join(dataDirectory, fileName);
    
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(404).send('File not found');
        }
        res.setHeader('Content-Type', 'application/json');
        res.send(data);
    });
};

// REST APIのエンドポイントを定義
app.get('*', handleRequest);
app.post('*', handleRequest);
app.put('*', handleRequest);
app.delete('*', handleRequest);

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
