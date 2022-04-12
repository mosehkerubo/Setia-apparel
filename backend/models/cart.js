const mongoose = require ("mongoose");
const cartSchema = mongoose.Schema(
    {
        Productname:{type:String,required:true,required:true},
        quantity:{type:Number,required:true},
        image:{type:String,default:false},
        price:{type:Number,require:true}
    },
    {
        timestamps:true
    }
)

module.exports = mongoose.model("cart",cartSchema);