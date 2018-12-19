const usermode = require('../Models/user');
const usernews = require('../Models/news');




exports.update = (req, res)=>{

    usernews.findByIdAndUpdate(req.body.body,      {news:req.body.id.news , title:req.body.id.title}).exec(function(err , data){
        if (data) {
      
          res.status(201).json(data)
        }
        else {
    
    res.status(501).json({message:"error in updating record"})
    
        }
      })

}