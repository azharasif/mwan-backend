const express = require('express');
const Router = express.Router();
var jwt = require('jsonwebtoken')
var decodedToken = '';
const mongoose = require('mongoose');
const Usermodel = require('../Models/user')

const verifyToken = require('../Middleware/jwtMD')

const usernews = require('../Models/news')




exports.userProfile = (req , res)=>{


    Usermodel.findById(req.user_id).exec(function (err , decodedToken){

        if (err) {
            console.log(err)
          }
          else {
      
            return res.status(200).json(decodedToken)
      
          }


    })


}
