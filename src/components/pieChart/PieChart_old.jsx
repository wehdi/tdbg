import "./pieChart.css";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer,Legend,Tooltip } from "recharts";
export default function PieChartLocal({ title, data }) {

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  return (
    <div className="pieChart">
      <h3 className="pieChartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <PieChart width={800} height={400}>
            <Legend/>
            <Tooltip />
          <Pie
            data={data}
            cx={300}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={42}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
