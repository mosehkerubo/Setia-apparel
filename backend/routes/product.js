const { route }=require("./auth");
const product = require("../models/product");
// const Product = require("../models/product")
const { compareSync } = require("bcrypt");
const router = require("express").Router();
const { verifyTokenAndAdmin,verifyTokenAndAuthorization } = require("./verifyToken");



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
router.put("/:id",async (req,res)=>{
    try{
    const id = req.params.id
    const updates=req.body
    const options={new:true}
    const updatedProduct=await product.findByIdAndUpdate(id,updates,options)
    console.log(updatedProduct)
    res.status(200).json(updatedProduct)
    }
    catch(err){
        
    res.status(500).json(err)
    }
    })

    //delete
    /
    router.delete("/:id",async (req, res) => {
        try {
          res.status(200).json("product succesfully deleted");
          return await product.findByIdAndDelete(req.params.id);
        } catch (err) {
          res.status(404).json("record not found");
        }
      });



// find all products

router.get("/",verifyTokenAndAdmin,async(req,res)=>{
    

    try{
        const products=await product.find()
        // console.log(products)
        res.status(200).json(products)
    }
    catch(err){
res.json(err)
    }
})



module.exports=router;