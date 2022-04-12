const mongoose=require("mongoose");

const orderSchema=mongoose.Schema(
{
    quantity:{type:Number,unique:true,required:true},
    productDescription:{type:String,unique:true,required:true},
    productname:{type:String,unique:true,required:true},
    size:{type:Array,required:true},
    image:{type:String,default:false},
    item:{type:Number,required:true},
price:{type:Number,default:false,unique:true}

},
{
    timestamps:true
}
);

module.exports=mongoose.model("Order", orderSchema);
