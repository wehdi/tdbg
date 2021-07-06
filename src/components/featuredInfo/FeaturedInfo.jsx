import "./featuredInfo.css";
import { TrendingUp, TrendingDown } from "@material-ui/icons";
import { Card, Row, Col,Container } from "react-bootstrap";

export default function featuredInfo() {
  return (
    <Container className="text-dark">
    <Row>
      <Col sm={4}>
        <Card className="featuredInfo shadow p-3 mb-5 bg-body rounde" border="primary">
          <Card.Body>
            <Card.Title>
              Montant echeance :
            </Card.Title>
            <Card.Text className="font-weight-bold h5">
              3 214 265 123.30 DA
              <TrendingUp className="text-danger ml-1" />
            </Card.Text>
            <footer className="blockquote-footer">à Skikda</footer>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={4}>
        <Card className="shadow p-3 mb-5 bg-body rounde" border="primary">
          <Card.Body>
            <Card.Title>
              Nombre de retraités :
            </Card.Title>
            <Card.Text className="font-weight-bold h5 text-center">
              93 054
              <TrendingUp className="text-danger ml-1" />
            </Card.Text>
            <footer className="blockquote-footer">à Skikda</footer>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={4}>
        <Card className="shadow p-3 mb-5 bg-body rounde" border="primary">
          <Card.Body>
            <Card.Title>
              Montant trop-percu :
            </Card.Title>
            <Card.Text className="font-weight-bold h5">
              2 214 265 123.3 DA
              <TrendingDown className="text-success ml-1" />
            </Card.Text>
            <footer className="blockquote-footer">à Skikda</footer>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    </Container>
  );
}
