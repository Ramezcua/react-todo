var express = require('express');
var exphbs = require('express-handlebars');

var app = express();

app.set('views', __dirname + '/project/views')

app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  layoutsDir: __dirname + '/project/views/layouts'
}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
  res.render('index');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Started server on http://%s:%s', host, port);
});
