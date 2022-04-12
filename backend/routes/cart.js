const router = require("express").Router();

const req = require("express/lib/request");
const Cart = require("../models/cart");
router.post("/add",async(req,res)=>{
    const addCart = new Cart(
        {
            productname:req.body.productname,
            price:req.body.price,
            image:req.body.image,
            quantity:req.body.quantity
        }

    )
    try{
        const savedCart=await addCart.save();
        res.status(201).json(savedCart)

    }
    catch(err){
        res.status(404).json(err)
    }
})
  module.exports= router;