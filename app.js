var express = require('express');
var path = require('path');
var app = express();
var auth = require('http-auth');
app.set('port', (process.env.PORT || 3000));

var basic = auth.basic({
        realm: "Simon Area."
    }, (username, password, callback) => { 
        // Custom authentication
        // Use callback(error) if you want to throw async error.
        callback(username === "waycatcher" && password === "shijusom@889");
    }
);

//app.use(auth.connect(basic));


app.use(express.static(path.join(__dirname, 'prod')));

app.listen(app.get('port'), function () {
  console.log('app listening on port'+ app.get('port'));
});
