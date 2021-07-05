import "./home.css";
import { dataEcheance } from "../../../dummyData";

import FeaturedInfo from "../../featuredInfo/FeaturedInfo";
import EcheanceChart from "../../echeanceChart/EcheanceChart";
import WidgetSmall from "../../widgetSmall/WidgetSmall";
import WidgetLg from "../../widgetLg/WidgetLg";
import RightWidget from "../../rightWidget/RightWidget";
import { Container, Col, Row } from "react-bootstrap";

export default function Home() {
  return (
    <Container className="home p-0">
      <Row className=" ">
        <Col sm={12} className=" ">
          <FeaturedInfo />
        </Col>
      </Row>
      <Row>
        <Col sm={8} className=" ">
          <EcheanceChart
            data={dataEcheance}
            title="Echeance"
            dataKey="Montant"
            grid
          />
        </Col>
        <Col sm={4}>
          <WidgetSmall />
        </Col>
      </Row>
     
    </Container>
  );
  /*
  <Col sm={4}>
          <WidgetSmall />
        </Col>
  */
  // <WidgetLg />
}
