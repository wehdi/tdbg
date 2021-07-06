import React from "react";
import { Col, Row, Container, Card } from "react-bootstrap";
import RightWidget from "../../rightWidget/RightWidget";
import { dataEcheance } from "../../../dummyData";
import { MonetizationOn } from "@material-ui/icons";
import PieChartLocal from "../../pieChart/PieChart";

export default function Finance() {
  return (
    <Container className="finances text-dark">
      <Row>
        <Col sm={4}>
          <Card
            className=" shadow p-4 mb-4 rounded-circle text-center"
            border="info"
          >
            <Card.Body>
              <Card.Title>Pension Moyenne :</Card.Title>
              <Card.Text className="font-weight-bold h5">
                23 213.12 DA
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}>
          <Card
            className=" shadow p-4 mb-4 rounded-circle text-center"
            border="info"
          >
            <Card.Body>
              <Card.Title>Cout de fonctionnement:</Card.Title>
              <Card.Text className="font-weight-bold h5">93.24 DA</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}>
          <Card
            className=" shadow p-4 mb-4 rounded-circle text-center"
            border="info"
          >
            <Card.Body>
              <Card.Title>Cout de gestion:</Card.Title>
              <Card.Text className="font-weight-bold h5">1 023.24 DA</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <Card className=" shadow p-4 mb-4 text-center" border="info">
            <Card.Body>
              <Card.Title>Taux de constatation TP</Card.Title>
              <Card.Text className="font-weight-bold h5">73.22 %</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}>
          <Card className=" shadow p-4 mb-4 text-center" border="info">
            <Card.Body>
              <Card.Title>Taux de recouvrement TP</Card.Title>
              <Card.Text className="font-weight-bold h5">52.92 %</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}>
          <Card className=" shadow p-4 mb-4 text-center" border="info">
            <Card.Body>
              <Card.Title>Salaire Moyen :</Card.Title>
              <Card.Text className="font-weight-bold h5">45 365.01 DA</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    /*<Col sm={8}>
          <RightWidget data={dataEcheance} title="Montant Trop percu" />
        </Col>*/
  );
}
