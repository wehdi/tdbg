import React from "react";
import { Col, Row, Container, Card } from "react-bootstrap";

export default function Instance() {
  return (
    <Container className="text-dark">
      <Row>
        <Col sm={6}>
          <Card
            className="shadow p-3 mb-5 bg-body rounde text-center"
            border="warning"
          >
            <Card.Body className>
              <Card.Title>Dossier droit direct :</Card.Title>
              <Card.Text className="font-weight-bold h5">
                10 214 Dossiers
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6}>
          <Card
            className="shadow p-3 mb-5 bg-body rounde text-center"
            border="primary"
          >
            <Card.Body className>
              <Card.Title>Reversion :</Card.Title>
              <Card.Text className="font-weight-bold h5">
                10 214 Dossiers
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <Card
            className="shadow p-1 mb-5 bg-body rounde text-center"
            border="danger"
          >
            <Card.Body className>
              <Card.Title>Temps mise en paiement d'un dossier</Card.Title>
              <Card.Text className="font-weight-bold h5">93.12 jours</Card.Text>
              <footer className="blockquote-footer">Moyenne nationale</footer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <Card
            className="shadow p-1 mb-5 bg-body rounde text-center"
            border="warning"
          >
            <Card.Body className>
              <Card.Title>Revision droit directe</Card.Title>
              <Card.Text className="font-weight-bold h5">
                12 965 Dossiers
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}>
          <Card
            className="shadow p-1 mb-5 bg-body rounde text-center"
            border="danger"
          >
            <Card.Body className>
              <Card.Title>Dossier Controler</Card.Title>
              <Card.Text className="font-weight-bold h5">
                46%
              </Card.Text>
              <footer className="blockquote-footer">Au niveau nationale</footer>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}>
          <Card
            className="shadow p-1 mb-5 bg-body rounde text-center"
            border="primary"
          >
            <Card.Body className>
              <Card.Title>Revision Reversion</Card.Title>
              <Card.Text className="font-weight-bold h5">
                20 965 Dossiers
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
