const mongoose=require("mongoose");



const ProductSchema=mongoose.Schema({
    productDescription:{type:String,unique:true,required:true},
    productname:{type:String,unique:true,required:true},
    color:{type:Array,required:true},
    size:{type:Array,required:true},
    image:{type:String,default:false},
price:{type:String,default:false,unique:true}



},
{
    timestamp:true
})

module.exports = mongoose.model("Product",ProductSchema);
