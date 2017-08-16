const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();
const dataset = require('./robot_data.js');
let index = "";



app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');

// app.use('/robot_database', express.static('../robot_database'));
app.use(express.static(__dirname + '/public'));

app.get('/index/', function (req,res){
  res.render('robot', dataset)
  })

app.get('/index/:one', function (req,res){
    index = req.params.one-1;
    res.render('individual', dataset.users[index])
    })

app.listen(3000, function () {
  console.log('Successfully started express application!');
})
