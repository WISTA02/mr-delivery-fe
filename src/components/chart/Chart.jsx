import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  YAxis,
} from "recharts";

export default function Chart({ title, data, dataKey, grid }) {

  return (
    <div className="chart2">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
        <YAxis />
          <XAxis dataKey="restaurant_name" stroke="#5550bd" xAxisId="0" scale="point"/>
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" activeDot={{ r: 8 }} strokeWidth={2}/>
          {/* <Line type="monotone" dataKey={dataKey} stroke="#5550bd" /> */}
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="8 6" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
