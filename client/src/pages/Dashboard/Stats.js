import { useEffect } from 'react';
import { useAppContext } from '../../context/appContext';
import { StatsContainer, Loading, ChartContainer } from '../../components';
const Stats = () => {
  const{showStats,isLoading,monthlyApplications}=useAppContext()

  useEffect(()=>{
    showStats()
    if(isLoading){
      <Loading center/>
    }
    // eslint-disable-next-line
  },[])
  return (
    <>
    <StatsContainer/>
    {monthlyApplications.length>0 && <ChartContainer/>}
    </>
  )
}

export default Stats