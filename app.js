const express = require('express');
const mustacheExpress = require('mustache-express');

// const path = require('path');

const app = express();
const dataset = require('./robot_data.js');




app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');


// app.use('/robot_database', express.static('../robot_database'));
app.use(express.static(__dirname + '/public'));

app.get('/database/index', function (req,res){
  res.render('robot', dataset)
  })

app.listen(3000, function () {
  console.log('Successfully started express application!');
})
