const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// urlencodedとjsonは別々に初期化
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
//listenします。カッコ内の数字を変更することで解放するポート番号を変更できます。
app.listen(3456);
//確認のためコンソールに出力します。
console.log('Server is online.');
//app.getでGETすることができます。最初の引数を変更することでURLが変更できます。二つ目が実行内容です。
app.get('/test', function (req, res) {
  res.status(200).send('hello world!')
})