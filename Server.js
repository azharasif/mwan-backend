
const express = require('express');
const bodyParser = require('body-parser');

// const  cores = require('cors');


var app = express();
var cors= require('cors');
const port = process.env.PORT || '3000' ;

app.use(cors({
  origin:['http://localhost:4200','http://127.0.0.1:4200'],
  credentials:true
}));

const mongoose = require('mongoose');
require('./config/congig');

app.listen(port , ()=>{

  console.log('server is running on port ' + port);

})

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/ang_reg').then(()=>{

console.log('db Connected')



}).catch((err)=>{
console.log(err);

})

  var allowCrossDomain = function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
      res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    }
    app.use(allowCrossDomain);


  
app.use(express.static(__dirname + '/dist/my-app'));
 app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


 




app.use(require('./Routes/routes'))