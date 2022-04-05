const mongoose =require( "mongoose" );

const UserSchema = new mongoose.Schema({
    username:{type:String,unique:true,required:true} ,
    email:{type:String,unique:true,required:true,},
    // hash: String,
    password:{type:String,required:true},
    isAdmin:{type:Boolean,default:false},
  },
   {timestamps: true});
  
  mongoose.model('User', UserSchema);