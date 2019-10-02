const mongoose=require('mongoose');

const PostSchema=mongoose.Schema({
    title:{
        type:String
    },
    content:{
        type:String
    },
    author:{
        type:String
    },
    date_created:{
        type:Date,
        default:new Date()
    },
    date_modified:{
        type:Date,
        default:new Date()
    }
})

const Post=module.exports=mongoose.model('Post',PostSchema);

module.exports.addPost=function(newPost,callback){
    newPost.save(callback);
}


module.exports.getPostById=function(id,callback){
    Post.findById(id,callback);
}

module.exports.getPostByAuthor=function(author,callback){
    var query={
        author:author
    }
    Post.findOne(query,callback);

}
