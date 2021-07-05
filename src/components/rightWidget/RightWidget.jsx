import "./rightWidget.css";
import { Bar } from "react-chartjs-2";

export default function RightWidget({title,data}) {
  return (
    <div className="rightWidget shadow  bg-light border border-primary">
      <h3 className="rightWidgettTitle">{title}</h3>
      <Bar
        data={data}
        options={{
          legend: {
            display: false,
            position: "right",
          },
        }}
      />
    </div>
  );
}
