var express = require('express');
var serveStatic = require("serve-static")
var path = require('path');
const history = require('connect-history-api-fallback');

var app = express();
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}
app.use(history({
    disableDotRule: true,
    verbose: true
}));
app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});
app.get('/', function (req, res) {
    res.render(path.join(__dirname + '/dist/index.html'));
});

app.use(serveStatic(path.join(__dirname, 'dist')));
var port = process.env.PORT || 80;
app.listen(port);