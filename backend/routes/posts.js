const router=require("express").Router
const posts = require("../models/posts");
const Posts=require("../models/posts");
const {verifyTokenAndAdmin,verifyTokenAndAuthorization}=require ("./verifyToken");

router.Posts("/add",async(req,res)=>{
    const newPosts=new Posts({
      title:req.bodytitle,
      category:req.body.category,
      image:req.body.image
    })

    try{
        const savedPosts=await newPosts.save()
        res.status(201).json(savedPosts)
    }
    catch(err){
        res.status(404).json(err)
    }
})
//update
router.put("/:id",verifyTokenAndAdmin,async (req,res)=>{
    try{
    const id = req.params.id
    const updates=req.body
    const options={new:true}
    const updatedPosts=await Posts.findByIdAndUpdate(id,updates,options)
    console.log(updatedPosts)
    res.status(200).json(updatedPosts)
    }
    catch(err){
        
    res.status(500).json("err")
    }
    })

    // find all posts

router.get("/",verifyTokenAndAdmin,async(req,res)=>{
    

    try{
        const posts=await Posts.find()
        res.status(200).json(posts)
    }
    catch(err){
res.json(err)
    }
})



modules.exports = router;