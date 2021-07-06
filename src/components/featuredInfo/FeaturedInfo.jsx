import "./featuredInfo.css";
import { TrendingUp, TrendingDown } from "@material-ui/icons";
import { Card, Row, Col,Container } from "react-bootstrap";

export default function featuredInfo() {
  return (
    /* <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Montant Echeance :</span>
        <div className="featuredEcheanceContainer">
          <span className="featuredEcheance">128 362 456 598.25 DA</span>
          <span className="featuredEcheanceRate">
            <TrendingUp />
            +3.25%
          </span>
        </div>
        <span className="featuredSub">Le mois dernier</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Nombre de retraité :</span>
        <div className="featuredEcheanceContainer">
          <span className="featuredEcheance">3 011 256 Retraités</span>
          <span className="featuredEcheanceRate">
            <TrendingUp />
            +2.28%
          </span>
        </div>
        <span className="featuredSub">Le mois dernier</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Montant Trop pecu :</span>
        <div className="featuredEcheanceContainer">
          <span className="featuredEcheance">254 462 456 598.63DA</span>
          <span className="featuredEcheanceRate">
            <TrendingDown className="featuredIcon negative"/>
            -0.05%
          </span>
        </div>
        <span className="featuredSub">Le mois dernier</span>
      </div>
    </div>*/
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
            <footer className="blockquote-footer">Au niveau national</footer>
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
              3 004 127
              <TrendingUp className="text-danger ml-1" />
            </Card.Text>
            <footer className="blockquote-footer">Au niveau national</footer>
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
              39 214 265 123.3 DA
              <TrendingDown className="text-success ml-1" />
            </Card.Text>
            <footer className="blockquote-footer">Au niveau national</footer>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    </Container>
  );
}
