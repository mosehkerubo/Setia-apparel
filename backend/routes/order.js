const router = require("express").Router();

const Order = require("../models/order");
router.post("/add",async(req,res)=>{
    const theOrder=new Order(
        {
            productDescription:req.body.quantity,
            productname:req.body.productname, 
            size:req.body.size,
        image:req.body.image,
        item:req.body.item,
        price:req.body.price,
        }
    )

    try{
        const saveOrder =await theOrder.save();
        res.status(201).json(saveOrder)
    }
    catch(err)
    {
        res.status(404).json(err)
    }
});
module.exports =router;
