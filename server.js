var express = require('express');
var serveStatic = require("serve-static")
var path = require('path');
const history = require('connect-history-api-fallback');
var app = express();
app.use(history({
    disableDotRule: true,
    verbose: true
}));
app.get('/', function (req, res) {
    res.render(path.join(__dirname + '/dist/index.html'));
});
app.use(serveStatic(path.join(__dirname, 'dist')));
var port = process.env.PORT || 80;
app.listen(port);