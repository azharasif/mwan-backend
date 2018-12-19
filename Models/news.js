

const mongoose = require('mongoose');


const schema = mongoose.Schema

var newsSchema = new schema({

news:{

    type:String,
    required:true
},
title:{

    type:String,
    required:true
},
date_created:{
    type: Date
},
user_id:{
        type:schema.Types.ObjectId,
        ref:'User'
}
})

var usernews = mongoose.model('News' ,  newsSchema) ;


module.exports = usernews ;

