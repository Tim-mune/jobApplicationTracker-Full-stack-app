import { useAppContext } from "../context/appContext"
import { Navigate } from "react-router-dom"
import { Loading } from "../components"
const ProtectedRoute = ({children}) => {
    const {user,userLoading}=useAppContext()
    if(userLoading){
      return <Loading center/>
    }
    if(!user){
      return <Navigate to='/landing'/>
    }
    else{
  return children
    }
}
export default ProtectedRoute