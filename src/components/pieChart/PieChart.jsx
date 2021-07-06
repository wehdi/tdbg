import "./pieChart.css";
import { Pie } from "react-chartjs-2";
export default function PieChartLocal({ title, data }) {
  return (
    <div className="pieChart">
      <h3 className="pieChartTitle">{title}</h3>
      <Pie
        data={data}
        options={{
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
}
