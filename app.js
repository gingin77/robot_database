const express = require('express');
const mustacheExpress = require('mustache-express');

// const path = require('path');

const app = express();
const dataset = require('./robot_data.js');

const position = dataset.users[3].id;
const url = position - 1;
console.log(url);




app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');


// app.use('/robot_database', express.static('../robot_database'));
app.use(express.static(__dirname + '/public'));

app.get('/index/', function (req,res){
  res.render('robot', dataset)
  })

app.get('/index/url', function (req,res){
    res.render('individual', dataset.users[position])
    })

// app.get('/index/', function (req,res){
//   res.render('robot', dataset)
//   })

app.listen(3000, function () {
  console.log('Successfully started express application!');
})
