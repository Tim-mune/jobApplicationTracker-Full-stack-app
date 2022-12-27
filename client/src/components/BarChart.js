import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const BarChartComponent = ({data}) => {
  return (
    <>
      <ResponsiveContainer width='100%' height={250}>
      <BarChart
        data={data}
        margin={{
          top: 50,
        }}
      >
        <CartesianGrid strokeDasharray='4 4' />
        <XAxis dataKey='date' />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Bar dataKey='count' fill='cyan' barSize={50} />
      </BarChart>
    </ResponsiveContainer>
    </>
  )
}

export default BarChartComponent