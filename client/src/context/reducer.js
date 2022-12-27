import { DISPLAY_ALERT,CLEAR_ALERT,REGISTER_USER_BEGIN,REGISTER_USER_SUCCESS,REGISTER_USER_ERROR,LOGIN_USER_BEGIN,LOGIN_USER_SUCCESS,LOGIN_USER_ERROR,SETUP_USER_BEGIN,SETUP_USER_SUCCESS,SETUP_USER_ERROR,TOGGLE_SIDEBAR, LOGOUT_USER,UPDATE_USER_BEGIN,UPDATE_USER_SUCCESS,UPDATE_USER_ERROR,HANDLE_CHANGE,CLEAR_VALUES,CREATEJOB_BEGIN,CREATEJOB_ERROR,CREATEJOB_SUCCESS,GETJOBS_BEGIN,GETJOBS_SUCCESS,SET_EDIT_JOB,DELETE_JOB_BEGIN,EDIT_JOB_BEGIN,EDIT_JOB_ERROR,EDIT_JOB_SUCCESS,SHOW_STATS_BEGIN,SHOW_STATS_SUCCESS,CLEAR_FILTERS,CHANGE_PAGE,GET_CURRENT_USER_BEGIN,GET_CURRENT_USER_SUCCESS} from "./actions"
import { initialState } from "./appContext"
const reducer=(state,action)=>{
    if(action.type===DISPLAY_ALERT){
        return {...state,showAlert:true,alertType:'danger',alertText:'please provide all values'}
    }
     if(action.type===CLEAR_ALERT){
        return {...state,showAlert:false,alertType:'',alertText:''}
    }
    if(action.type===REGISTER_USER_BEGIN){
        return{...state,isLoading:true}
    }
      if(action.type===REGISTER_USER_SUCCESS){
        return{...state,isLoading:false,user:action.payload.user,userLocation:action.payload.location,jobLocation:action.payload.location,showAlert:true,alertType:'success',alertText:'User Created!!... Redirecting'}
    }
     if(action.type===REGISTER_USER_ERROR){
        return{...state,isLoading:false,showAlert:true,alertType:'danger',alertText:action.payload.msg}
    }

    if(action.type===LOGIN_USER_BEGIN){
        return{...state,isLoading:true}
    }
      if(action.type===LOGIN_USER_SUCCESS){
        return{...state,isLoading:false,user:action.payload.user,userLocation:action.payload.location,jobLocation:action.payload.location,showAlert:true,alertType:'success',alertText:'Logged in Successfully'}
    }
     if(action.type===LOGIN_USER_ERROR){
        return{...state,isLoading:false,showAlert:true,alertType:'danger',alertText:action.payload.msg}
    }
    
// alternative function to log and register reducer
    if(action.type===SETUP_USER_BEGIN){
        return{...state,isLoading:true}
    }
      if(action.type===SETUP_USER_SUCCESS){
        return{...state,isLoading:false,user:action.payload.user,userLocation:action.payload.location,jobLocation:action.payload.location,showAlert:true,alertType:'success',alertText:action.payload.alertText}
    }
     if(action.type===SETUP_USER_ERROR){
        return{...state,isLoading:false,showAlert:true,alertType:'danger',alertText:action.payload.msg}
    }

    if(action.type===TOGGLE_SIDEBAR){
        return{...state,showSidebar:!state.showSidebar}
    }

    if(action.type===LOGOUT_USER){
        return{...initialState,user:null,userLoading:false}
    }
     if(action.type===UPDATE_USER_BEGIN){
        return{...state,isLoading:true}
    }
      if(action.type===UPDATE_USER_SUCCESS){
        return{...state,isLoading:false,user:action.payload.user,userLocation:action.payload.location,jobLocation:action.payload.location,showAlert:true,alertType:'success',alertText:'User profile updated successfully!!'}
    }
     if(action.type===UPDATE_USER_ERROR){
        return{...state,isLoading:false,showAlert:true,alertType:'danger',alertText:action.payload.msg}
    }

     if(action.type===HANDLE_CHANGE){
        return{...state,page:1,[action.payload.name]:action.payload.value}
    }
    if(action.type===CLEAR_VALUES){
        const initialState={
    isEditing:false,
    jobLocation:state.userLocation ||'',
    editJobId:'',
    position:'',
    company:'',
    jobType:'full-time',
    status:'pending'

        }
        return{...state,...initialState}
    }


    if(action.type===CREATEJOB_BEGIN){
        return {...state,isLoading:true}
    }
     if(action.type===CREATEJOB_SUCCESS){
        return{...state,isLoading:false,showAlert:true,alertType:'success',alertText:'New job created'}
    }
     if(action.type===CREATEJOB_ERROR){
        return{...state,isLoading:false,showAlert:true,alertType:'danger',alertText:action.payload.msg}
    }

    if(action.type===GETJOBS_BEGIN){
        return {...state,isLoading:true,showAlert:false}
    }

    if(action.type===GETJOBS_SUCCESS){
        return{...state,isLoading:false,jobs:action.payload.jobs,totalJobs:action.payload.totalJobs,
        numOfJobs:action.payload.numOfPages
        }
    }
    if(action.type===SET_EDIT_JOB){
    const job = state.jobs.find(job=>job._id===action.payload.id)
  const { _id, position, company, jobLocation, jobType, status } = job
  return {
    ...state,
    isEditing: true,
    editJobId: _id,
    position,
    company,
    jobLocation,
    jobType,
    status,
  }
}
    if(action.type===DELETE_JOB_BEGIN){
        return{...state,isLoading:true}
    }

    if(action.type===EDIT_JOB_BEGIN){
        return{...state,isLoading:true}
    }
     if(action.type===EDIT_JOB_SUCCESS){
        return{...state,isLoading:false,showAlert:true,alertType:'success',alertText:'Job Updated'}
    }
     if(action.type===EDIT_JOB_ERROR){
        return{...state,isLoading:false,showAlert:true,alertType:'danger',alertText:action.payload.msg}
    }

     if(action.type===SHOW_STATS_BEGIN){
        return{...state,isLoading:true,showAlert:false}
    }
      if(action.type===SHOW_STATS_SUCCESS){
        return{...state,isLoading:false,stats:action.payload.stats,monthlyApplications:action.payload.monthlyApplications}
    }
    if(action.type===CLEAR_FILTERS){
        return {...state,search:'',
    searchStatus:'',
    searchType:'',
    sort:'',}
    }
    if(action.type===CHANGE_PAGE){
        return {...state,page:action.payload.page}
    }

    if(action.type===GET_CURRENT_USER_BEGIN){
        return {...state,userLoading:true,showAlert:false}
    }

     if(action.type===GET_CURRENT_USER_SUCCESS){
        return {...state,userLoading:false,user:action.payload.user,userLocation:action.payload.location,jobLocation:action.payload.location}
    }


     



throw new Error(`no such action :${action.type}`)
}
export default reducer