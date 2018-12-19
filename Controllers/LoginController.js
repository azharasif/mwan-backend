const express = require('express');
const mongoose = require('mongoose');

const Usermodel = require('../Models/user')
var  jwt = require('jsonwebtoken')


exports.post = (req , res)=>{

  let promis=  Usermodel.findOne({email:req.body.email}).exec();
promis.then((function(doc){

if(doc){
   if(doc.isValid(req.body.password)) {
let token = jwt.sign({_id:doc._id} , 'secret' , {expiresIn:'3h'} )

return res.status(200).json(token);
   }

   else{
      return res.status(501).json({message:"invalid  password"})
  
   }
}
else{
    return res.status(501).json({message:'email not found'})
}

})).catch(function(err){
 return res.status(501).json({message:'Internal Error'})

})


}

