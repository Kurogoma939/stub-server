# Node.jsの公式イメージをベースにする
FROM node:14

# アプリケーションディレクトリを作成する
WORKDIR /usr/src/app

# アプリの依存関係をインストールする
COPY package*.json ./
RUN npm install

# アプリケーションソースをバンドルする
COPY . .

# アプリを実行する
CMD [ "node", "server.js" ]
