import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

const AreaChartComponent = ({data}) => {
  return (
     <>
      <ResponsiveContainer width='100%' height={250}>
        <AreaChart data={data} margin={{top:50}}>
            <CartesianGrid strokeDasharray='3 3'/>
            <XAxis dataKey='date'/>
            <YAxis allowDecimals={false}/>
            <Area type='monotoneY' dataKey='count' stroke='cyan' fill='#bef8fd'/>
        </AreaChart>
    </ResponsiveContainer>
    </>
  )
}

export default AreaChartComponent