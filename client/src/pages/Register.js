import { useState,useEffect } from "react"
import { Logo,Formrow,Alert } from "../components"
import Wrapper from "../assets/wrappers/RegisterPage"
import { useAppContext } from "../context/appContext"
import {useNavigate} from 'react-router-dom'
const initialState={
    name:'',
    email:'',
    password:'',
    isMember:true
}
const Register = () => {
    const [values,setValues]=useState(initialState)
const {user,isLoading,showAlert,displayAlert,registerUser,loginUser}=useAppContext()
const navigate=useNavigate()

    const toggleMember=()=>{
        setValues({...values,isMember:!values.isMember})
    }
    const handleChange=(e)=>{
        setValues({...values,[e.target.name]:e.target.value})
    }
    const onSubmit=(e)=>{
        e.preventDefault()
        const {name,email,password,isMember}=values
        if(!email || !password || (!isMember && !name)){
            displayAlert()
            return
        }
        const currentUserReg={name,email,password}
        const currentUserLog={email,password}
        if(isMember){
            loginUser(currentUserLog)
        }
        else{
          registerUser(currentUserReg)
        }
    }
    useEffect(()=>{
        if(user){
             setTimeout(()=>{
                navigate('/')
             },3000)
        }
       
    },[user,navigate])
  return (
    <Wrapper className="full-page">
        <form onSubmit={onSubmit} className="form">
            <Logo/>
            <h3>{values.isMember?"login":"Register"}</h3>
            {showAlert && <Alert/>}
            {!values.isMember&&<Formrow type='text' name='name' value={values.name} handleChange={handleChange}/>}
           <Formrow type='email' name='email' value={values.email} handleChange={handleChange}/>
           <Formrow type='password' name='password' value={values.password} handleChange={handleChange}/>
            <button type="Submit" className="btn btn-block" disabled={isLoading}>{values.isMember?"Login":"Register"}</button>
            <p>
                {values.isMember?'Not a member?':"Already a member?"}
                <button type="button" onClick={toggleMember} className='member-btn'>{values.isMember?"Register":"Login"}</button></p>
        </form>

    </Wrapper>
  )
}

export default Register