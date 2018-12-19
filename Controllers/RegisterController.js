const express = require('express');
const mongoose = require('mongoose');

const Usermodel = require('../Models/user')

exports.post = (req, res)=>{

var user = new Usermodel({
    username: req.body.name,
    age:req.body.age,
    email:req.body.email,
    password:req.body.password


})

 let promise = user.save();

 promise.then(function(doc){

    return res.status(201).json(doc);
 })


 promise.catch(function(err){

    return res.status(501).json({message:"error inregistering user"})
 })
}