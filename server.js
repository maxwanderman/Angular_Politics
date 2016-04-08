var express = require('express');
var app = express();

var progressive = ['Hillary Clinton', 'Bernie Sanders', 'Martin O\'Malley', 'Elizabeth Warren', 'Jill Stein', 'Lucy Florez', 'Winona LaDuke', 'Al Franken'];
var conservative = ['Donald Drumpf', 'Ted Cruz', 'John Kasich', 'Jeb Bush', 'Carly Fiorina', 'Rick Santorum', 'Marco Rubio', 'Gary Johnson'];



// app.get('/', function(request, response){
//   console.log("it works");
//   response.send('Huzzah');
//   });

  app.use(express.static('public'));

app.get('/republicans', function(request, response){
  response.send(conservative);
});

app.get('/democrats', function(request, response){
  response.send(progressive);
});


var server = app.listen(3000, function(){
  // console. l
  var port = server.address().port;
  console.log(port);
});
