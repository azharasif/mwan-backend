const express = require('express');
const mongoose = require('mongoose');

const usernews = require('../Models/news');
const usermodel = require('../Models/user');
var  jwt = require('jsonwebtoken')


exports.post = (req , res)=>{
   

var news  = new  usernews({

     news:req.body.news,
     title:req.body.title,
     date_created: new Date(),
     user_id:req.user_id
     
})

let promise = news.save();

promise.then(function(doc){

    return res.status(200).json({message:" news sucessfully uploaded"});
   //return res.status(200).json(doc , {message:"news Upload sucessfully"});
   //return res.status('news upload sucessfully').json(doc);
})

promise.catch(function(err){

   return res.status(501).json({message:"News Uploading failed"})
})
}






// exports.post = (req, res) => {



// var news  = new  usernews({

//      news:req.body.news,
//      title:req.body.title,
//      date_created: new Date(),
//      user_id:req.user

// })

// news.save();



// }


