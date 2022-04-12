const { route }=require("./auth");
const product = require("../models/product");
const router = require("express").Router();

router.get("/producttest",(req,res)=>{
    res.send("productroute")
})



router.post("/add",async(req,res)=>{

const newProduct = new product({
    productname:req.body.productname,
    color:req.body.color,
    price:req.body.price,
    image:req.body.image,
    productDescription:req.body.productDescription,


})
try{
const savedProduct=await newProduct.save()
res.status(201).json(savedProduct)
}
catch(err){
    res.status(404).json(err)
    console.log('mmm')
}
})

//update
// router.put("")

module.exports=router;