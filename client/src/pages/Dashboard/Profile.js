
import { useState } from 'react';
import { Formrow, Alert } from '../../components';
import { useAppContext } from '../../context/appContext';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
const Profile = () => {
  const {user,showAlert,displayAlert,updateUser,isLoading}=useAppContext()
  const[name,setName]=useState(user?.name)
  const[email,setEmail]=useState(user?.email)
  const[lastName,setlastName]=useState(user?.lastName)
  const[location,setLocation]=useState(user?.location)

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!name || !email || !lastName || !location){
      displayAlert()
      return
    }
    updateUser({name,email,lastName,location})
  }
  return (
   <Wrapper>
    <form className='form' onSubmit={handleSubmit}>
      <h3>Profile</h3>
      {showAlert && <Alert/>}
      <div className="form-center">
        <Formrow type='text' name='name' value={name} handleChange={(e)=>setName(e.target.value)} />
        <Formrow type='text' name='lastName' labelText='last name' value={lastName} handleChange={(e)=>setlastName(e.target.value)} />
         <Formrow type='email' name='email' labelText='email' value={email} handleChange={(e)=>setEmail(e.target.value)} />
          <Formrow type='text' name='location' labelText='location' value={location} handleChange={(e)=>setLocation(e.target.value)} />
          <button type="submit" className='btn btn-block' disabled={isLoading}>{isLoading?'please wait':'save changes'}</button>
      </div>
    </form>
   </Wrapper>
  )
}

export default Profile