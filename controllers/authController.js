import { StatusCodes } from 'http-status-codes'
import User from '../models/User.js'
import {BadRequestError,NotFoundError, UnauthenticatedError} from '../Errors/index.js'
import attachCookie from '../utils/attachCookie.js'
const register=async(req,res)=>{
    const{name,email,password}=req.body
    if(!email || !name || !password){
        throw new BadRequestError('please provide all fields')
    }
    const userExists=await User.findOne({email})
    if(userExists){
        throw new BadRequestError('email already in use')
    }
    const user=await User.create({name,email,password})
    const token=await user.createJWT()
    attachCookie({res,token})
    res.status(StatusCodes.CREATED).json({user:{email:user.email,name:user.name,lastName:user.lastName,location:user.location},location:user.location})
}

const login=async(req,res)=>{
    const {email,password}=req.body
    if(!email || !password){
        throw new BadRequestError('please provide all values')
    }
    const user=await User.findOne({email})
    if(!user){
        throw new UnauthenticatedError('Invalid credentials')
    }
    const isPasswordValid=await user.comparePassword(password)

    if(!isPasswordValid){
        throw new UnauthenticatedError('Invalid credentials')
    }

    const token=user.createJWT()
    user.password=undefined
    attachCookie({res,token})
res.status(StatusCodes.OK).json({user,location:user.location})
}

const updateUser=async(req,res)=>{
    const{email,name,lastName,location}=req.body
    if(!email || !name || !lastName || !location){
        throw new BadRequestError('please provide all values')
    }
    const user=await User.findOne({_id:req.user.userId})
    user.email=email
    user.name=name
    user.lastName=lastName
    user.location=location
    await user.save()
    // user.password=undefined
    const token=user.createJWT()
    attachCookie({res,token})
    res.status(StatusCodes.OK).json({user,location:user.location})
}

const getCurrentUser=async(req,res)=>{
    const user=await User.findOne({_id:req.user.userId})
    res.status(StatusCodes.OK).json({user,location:user.location})
}

const logOut=async()=>{
res.cookie('token','logout',{httpOnly:true,expires:new Date(Date.now()),
})
res.status(StatusCodes.Ok).json({msg:'user logged out'})
}

export {register,login,updateUser,getCurrentUser,logOut}