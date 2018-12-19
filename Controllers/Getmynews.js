const express = require('express');
const Router = express.Router();
var jwt = require('jsonwebtoken')
var decodedToken = '';
const mongoose = require('mongoose');
const Usermodel = require('../Models/user')

const verifyToken = require('../Middleware/jwtMD')

const usernews = require('../Models/news')



// Router.get('/mynews', verifyToken.Verify, function (req, res, next) {

//   usernews.find({ user_id: req.user_id }).exec(function (err, data) {

//     if (err) {

//       console.log(err)
//     }
//     else {
//       return res.json(data)
//     }
//   })
// })
exports.getnews = ( req, res )=>{

usernews.find({user_id:req.user_id}).exec(function(err , data){

    if (err) {
  
        console.log(err)
      }
      else {
        return res.json(data)
      }

})


}
