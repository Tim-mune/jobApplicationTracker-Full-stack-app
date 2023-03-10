import { Formrow,FormRowSelect, Alert } from '../../components';
import { useAppContext } from '../../context/appContext';
import Wrapper from '../../assets/wrappers/DashboardFormPage';

const AddJob = () => {
  const{isLoading,showAlert,displayAlert,position,company,jobLocation,jobType,jobTypeOptions,status,statusOptions,isEditing,handleChange,clearValues,createJob,editJob}=useAppContext()

  const handleJobInput=(e)=>{
const name=e.target.name
const value=e.target.value
handleChange({name,value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!position || !company ||!jobLocation){
      displayAlert()
      return
    }
    if(isEditing){
      editJob()
    }
    createJob()
  }
  return (
    <Wrapper>
      <form onSubmit={handleSubmit} className='form'>
        <h3>{isEditing?'edit job':'add job'}</h3>
        {showAlert && <Alert/>}
        <div className="form-center">
          <Formrow type='text' name='position' value={position} handleChange={handleJobInput} />
          <Formrow type='text' name='company' value={company} handleChange={handleJobInput} />
          <Formrow type='text' labelText='location' name='jobLocation' value={jobLocation}handleChange={handleJobInput} />

          <FormRowSelect name='status' value={status} handleChange={handleJobInput} list={statusOptions} />

          <FormRowSelect name='jobType' labelText=' job type' value={jobType} handleChange={handleJobInput} list={jobTypeOptions} />

          <div className="btn-container">
            <button type="submit" className='btn btn-block submit-btn' disabled={isLoading}>submit</button>

            <button type='button' className='btn btn-block clear-btn' onClick={clearValues}>clear values</button>
          </div>
        </div>
      </form>
    </Wrapper>
  )
}

export default AddJob