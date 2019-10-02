var express = require('express');
var router = express.Router();
var Post=require('../model/post')


/* GET home page. */
router.post('/addPost', function(req, res, next) {
  var newPost=new Post({
     title:req.body.title,
     content:req.body.content,
     author:req.body.author
  });
  Post.addPost(newPost,(err,post)=>{
      if(err){
          return res.json({
              success:false,
              message:"posts is not added"
          })
      }else{
          return res.json({
              success:true,
              message:"post added sucessfully"
          })

      }
  })
});

router.get('/:id',(req,res)=>{
    id=req.params._id;
    Post.findById(id,(err,post)=>{
        if(err){
            return res.json({
                success:false,
                message:"can not get the req"
            })
        }else{
            return res.json(post);
        }
    })

})


router.get('/search',function(req,res,next){
    Post.find((err,result)=>{
        if(err){
            next(err);
        }else{
            res.json(result);
        }
    })
})

module.exports = router;
