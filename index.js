const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const routes = require('./routes');
const app = express();
const port = process.env.PORT || 3000;
const compress = require('./db/compress');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use('/', routes);
compress.create();
const server = http.createServer(app);

server.listen(port, () => {
    console.log('Server listeneing on port: ', port); 
});

