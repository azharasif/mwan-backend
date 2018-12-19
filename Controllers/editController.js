const usermode = require('../Models/user');
const usernews = require('../Models/news');



  exports.edit =(req , res)=>{

    var id = req.params.id

    usernews.findById(id).exec(function(err , data){
  
        if (err) {
    
          console.log('error')
          console.log(err);
        }
        else {
    
          return res.json(data);
        }
    
    
      })


  }