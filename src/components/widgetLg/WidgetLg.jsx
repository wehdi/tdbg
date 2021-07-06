import "./widgetLg.css";
import PieChartLocal from "../pieChart/PieChart";
import { dataTp } from "../../dummyData";
import { Card, Row, Col, ListGroup, Container } from "react-bootstrap";

export default function WidgetLg() {
  return (
    <Container className="widgetLg text-dark">
       <Card
            className="  shadow p-5 mb-5 text-center"
            border="primary"
          >
            <Card.Body>
              <Card.Title>Ratio de prodictivité :</Card.Title>
              <Card.Text className="font-weight-bold h5">19.40 Points</Card.Text>
              <footer className="blockquote-footer">En hausse</footer>
            </Card.Body>
          </Card>
          <Card
            className="  shadow p-5 mb-5 text-center"
            border="primary"
          >
            <Card.Body>
              <Card.Title>Cout liquidation Dossier :</Card.Title>
              <Card.Text className="font-weight-bold h5">1 023.24 DA</Card.Text>
              <footer className="blockquote-footer">En baisse</footer>
            </Card.Body>
          </Card>
    </Container>
  );
}
