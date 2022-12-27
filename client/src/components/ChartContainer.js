import BarChartComponent from "./BarChart"
import AreaChartComponent from "./AreaChart"
import { useAppContext } from "../context/appContext"
import Wrapper from "../assets/wrappers/ChartsContainer"
import { useState } from "react"
const ChartContainer = () => {
  const [barChart,setBarChart]=useState(true)
  const{monthlyApplications:data}=useAppContext()

  return (
   <Wrapper>
    <h4>Monthly Applications</h4>
     <button type='button' className="btn" onClick={() => setBarChart(!barChart)}>
        {barChart ? 'AreaChart' : 'BarChart'}
      </button>
    {barChart?<BarChartComponent data={data}/>:<AreaChartComponent data={data}/>}
   </Wrapper>
  )
}

export default ChartContainer