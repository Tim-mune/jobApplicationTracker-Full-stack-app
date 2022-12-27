import {Formrow,FormRowSelect}from '.'
import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/wrappers/SearchContainer'
import { useState,useMemo } from 'react'

const SearchContainer = () => {
const [localSearch,setLocalSearch]=useState('')
  const {isLoading,search,searchStatus,searchType,sort,sortOptions,handleChange,clearFilters,jobTypeOptions,statusOptions}=useAppContext()

  const handleSearch=(e)=>{

    handleChange({name:e.target.name,value:e.target.value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    setLocalSearch('')
    clearFilters()
  }

//   const debounce=()=>{
//     console.log('debounce');
//     return (e)=>{
// setLocalSearch(e.target.value)
//     }
//   }
const debounce=()=>{
let timeOutId;
  return (e)=>{
    setLocalSearch(e.target.value)
    clearTimeout(timeOutId)
    timeOutId=setTimeout(()=>{
       handleChange({name:e.target.name,value:e.target.value})
    },1190)
  }
}
const optimalDebounce=useMemo(()=>debounce(),[])

  return (
    <Wrapper>
<form className='form' onSubmit={handleSubmit}>
  <h4>Search form</h4>
  <div className="form-center">
    <Formrow type='text' name='search' value={localSearch} handleChange={optimalDebounce}/>

    <FormRowSelect labelText='status' name='searchStatus' value={searchStatus} handleChange={handleSearch} list={['all',...statusOptions]} />

    <FormRowSelect labelText='job type' name='searchType' value={searchType} handleChange={handleSearch} list={['all',...jobTypeOptions]} />

    <FormRowSelect labelText='sort' name='sort' value={sort} handleChange={handleSearch} list={sortOptions} />
    <button className='btn btn-block btn-danger' disabled={isLoading} type='submit'onClick={clearFilters} >clear filters</button>
  </div>
</form>
    </Wrapper>
  )
}

export default SearchContainer