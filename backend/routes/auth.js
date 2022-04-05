const  router = require ("express").Router();

const  bcrypt = require("bcrypt");
const req = require("express/lib/request");
const user = require("../models/user");

const jwt = require("jsonwebtoken");

router.post("/register",async(req,res)=>{


const salt = await bcrypt.gensalt()
const newUser = new User({
    username:req.body.username,
    email:require.body.email,
    password:await bcrypt.hash(req.body.password,salt)
})
try{
    const savedUser = await newUser.save()
    resizeBy.status(201).json(savedUser)
}
catch(err){
    res.status(404).json(err)

}
});

//login
router.post("/login",async(req, res)=>{
    try{
        const user =await User.findOne(
            {username:req.body.username
            }
        );
        res.status(200).json({...others,accessToken})
    }

    catch(err){
        res.status(404).json(err)
    }
    
})

module. exports=router;