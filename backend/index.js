const express=require("express")

const mongoose=require("mongoose")

const dotenv=require("dotenv")

const authRoute = require("./routes/auth")

const productRoute = require("./routes/product")

const userRoute = require("./routes/user")

const cartRoute = require("./routes/cart")

const app=express()
const PORT=process.env.PORT || 8000
dotenv.config()
mongoose.connect(process.env.MONGO_URL)
.then((err)=>{
    console.log("DB Connected")
})
.catch((err)=>{
    console.log(err);
})

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
}) 
app.use(express.json())
app.use("/api/user",userRoute)
 app.use("/api/auth", authRoute);
 app.use("/api/product",productRoute);
 app.use("/api/cart",cartRoute);