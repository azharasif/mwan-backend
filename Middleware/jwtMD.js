var jwt = require('jsonwebtoken') ;


decodetoken= "" ;

exports.Verify = (req,res,next)=>{

    let token = req.query.token;
jwt.verify(token, 'secret', function (err, tokendata){

    if(tokendata){

    decodetoken = tokendata;
    req.user_id = decodetoken._id
    next()
    }

    else {
         
        return res.status(400).json({ message: 'Unauthorized request' });


    }


})    


}