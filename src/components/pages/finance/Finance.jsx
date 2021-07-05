import React from "react";
import { Col, Row, Container, Card } from "react-bootstrap";
import RightWidget from "../../rightWidget/RightWidget";
import { dataEcheance } from "../../../dummyData";
import { MonetizationOn } from "@material-ui/icons";

export default function Finance() {
  return (
    <Container className="text-dark">
      <Row>
        <Col sm={8}>
          <RightWidget data={dataEcheance} title="Montant Trop percu" />
        </Col>
        <Col sm={4}>
          <Card
            className=" shadow p-5 mb-5 rounded-circle text-center"
            border="danger"
          >
            <Card.Body>
              <Card.Title>Moyenne pension :</Card.Title>
              <Card.Text className="font-weight-bold h5">
                35 213.12 DA
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            className=" shadow p-5 mb-5 rounded-circle text-center"
            border="danger"
          >
            <Card.Body>
              <Card.Title>Cout liquidation Dossier :</Card.Title>
              <Card.Text className="font-weight-bold h5">1 023.24 DA</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
