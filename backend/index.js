const express=require("express")

const mongoose=require("mongoose")

const dotenv=require("dotenv")

const userRoute = require("./routes/user")

const authRoute = require("./routes/auth")

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
// app.use ("/api/user")