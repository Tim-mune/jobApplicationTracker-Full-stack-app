import mongoose from "mongoose";
import validator from "validator";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'please provide name'],
        minlength:3,
        maxlength:30,
        trim:true,
    },
      email:{
        type:String,
        required:[true, 'please provide email'],
        validate:{
            validator:validator.isEmail,
            message:'please provide a valid email'
        },
        unique:true,
    },
      password:{
        type:String,
        required:[true, 'please provide password'],
        minlength:6,
    },
      lastName:{
        type:String,
        maxlength:20,
        trim:true,
        default:'lastName'
    },
      location:{
        type:String,
        trim:true,
        maxlength:20,
        default:'User city',
    },
},{timestamps:true})
UserSchema.pre('save',async function(){
  if(!this.isModified('password')) return 
  const salt=await bcrypt.genSalt(10)
  this.password=await bcrypt.hash(this.password,salt)
})
UserSchema.methods.createJWT=function(){
  const token=jwt.sign({userId:this._id},process.env.JWT_SECRET,{expiresIn:process.env.JWT_LIFETIME})
  return token
}
UserSchema.methods.comparePassword=async function(userPassword){
const isMatch=await bcrypt.compare(userPassword,this.password)
return isMatch
}
export default mongoose.model("User",UserSchema)