import "./home.css";
import { dataEcheance } from "../../../dummyData";

import FeaturedInfo from "../../featuredInfo/FeaturedInfo";
import EcheanceChart from "../../echeanceChart/EcheanceChart";
import WidgetSmall from "../../widgetSmall/WidgetSmall";
import WidgetLg from "../../widgetLg/WidgetLg";
import RightWidget from "../../rightWidget/RightWidget";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <div className="homeWidgetsTop">
        <EcheanceChart
          data={dataEcheance}
          title="Echeance"
          dataKey="Montant"
          grid
        />
        <RightWidget data={dataEcheance} title="Montant Trop percu" />
      </div>
      <div className="homeWidgetsBottom">
        <WidgetLg />
        <WidgetSmall />
      </div>
    </div>
  );
}
