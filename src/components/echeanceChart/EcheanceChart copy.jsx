import "./echeanceChart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
export default function EcheanceChart({title,data,dataKey,grid}) {
 
  return (
    <div className="echeanceChart">
      <h3 className="echeanceChartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <Tooltip />
          {grid && <CartesianGrid strokeDasharray="5 5" />}
          <XAxis dataKey="name" stroke="#5550bd" />
          <YAxis />
          <Line type="monotone" dataKey={dataKey} stroke="#8884d8"/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
