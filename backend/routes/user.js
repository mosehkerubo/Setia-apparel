const req = require("express/lib/request");

const router = require("express").Router();


const user = require ("../routes/auth");


router.put("/:", async (req, res) =>{
    try{
        res.status(200).json(updateUser)

    }
    catch (err) {
        res.status (404).json(err);
    }
} )

module.exports = router;