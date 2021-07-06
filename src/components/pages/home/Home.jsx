import "./home.css";
import { dataEcheance } from "../../../dummyData";

import FeaturedInfo from "../../featuredInfo/FeaturedInfo";
import EcheanceChart from "../../echeanceChart/EcheanceChart";
import WidgetSmall from "../../widgetSmall/WidgetSmall";
import WidgetLg from "../../widgetLg/WidgetLg";
import RightWidget from "../../rightWidget/RightWidget";
import { Container, Col, Row, Card } from "react-bootstrap";

export default function Home() {
  return (
    <Container className="home p-0">
      <Row className=" ">
        <Col sm={12} className=" ">
          <FeaturedInfo />
        </Col>
      </Row>
      <Row>
        <Col sm={12} className=" ">
          <EcheanceChart
            data={dataEcheance}
            title="Echeance"
            dataKey="Montant"
            grid
          />
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <WidgetSmall />
        </Col>
        <Col sm={6} className="mt-5">
          <WidgetLg />
        </Col>
      </Row>
    </Container>
  );
}
