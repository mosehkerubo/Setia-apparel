const mongoose=require("mongoose");
const postsSchema =mongoose.Schema({
    image:{type:String,required:true},
    cartegory:{type:String,require:true},
    // image:{type:String,requiretrue}
})
module.exports =mongoose.models("/Post",postsSchema)