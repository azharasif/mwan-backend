const usermode = require('../Models/user');
const usernews = require('../Models/news');



exports.delete = (req , res)=>{

    
    var id = req.params.id

    usernews.findByIdAndRemove(id).exec(function(err , data){

        if (err) {
  
            console.log('error')
            console.log(err);
          }
          else {
      
            return res.json(data);
          }

    })

}