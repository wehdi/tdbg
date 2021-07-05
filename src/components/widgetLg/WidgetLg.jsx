import "./widgetLg.css";
import PieChartLocal from "../pieChart/PieChart"
import {dataTp} from "../../dummyData"
export default function WidgetLg() {
  return <div className="widgetLg">
    <PieChartLocal title="Trop percu constaté par rapport à STAR" data={dataTp} />
  </div>;
}
