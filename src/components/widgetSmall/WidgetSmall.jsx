import "./widgetSmall.css";
import { AccountBalance, TrendingUp, TrendingDown,PermDeviceInformationSharp } from "@material-ui/icons";
import { Card, Row, Col, ListGroup, Container } from "react-bootstrap";

export default function WidgetSmall() {
  return (
    <Container>
      <Row>
        <Col sm={12} className="mt-5 mb-2">
          <ListGroup className="border border-primary">
            <ListGroup.Item className="btn list-group-item-action flex-column align-items-start list-group-item-secondary ">
              <h4 class="font-weight-bold text-center">
                <PermDeviceInformationSharp className="mx-2" />
                À savoir :
              </h4>
            </ListGroup.Item>
            <ListGroup.Item className="btn list-group-item-action flex-column align-items-start ">
              <span class="mb-1">Consta. TP STAR - CNR:</span>
              <h5 className="widgetSmallMontant text-center font-weight-bold">
                + 5.30% <TrendingUp className="text-success" />
              </h5>
            </ListGroup.Item>
            <ListGroup.Item className="btn list-group-item-action flex-column align-items-start ">
              <span class="mb-1"> Recouvrement TP:</span>
              <h5 className="widgetSmallMontant text-center font-weight-bold">
                + 0.34% <TrendingUp className="text-success" />
              </h5>
            </ListGroup.Item>
            <ListGroup.Item className="btn list-group-item-action flex-column align-items-start ">
              <span class="mb-1">Anomalies eff. pecuniaires:</span>
              <h5 className="widgetSmallMontant text-center font-weight-bold">
                {" "}
                -1.33 % <TrendingDown className="text-success" />
              </h5>
            </ListGroup.Item>
            <ListGroup.Item className="btn list-group-item-action flex-column align-items-start ">
              <span class="mb-1">Mise en paiement d'un dossier:</span>
              <h5 className="widgetSmallMontant text-center font-weight-bold">
                {" "}
                -1.33 % <TrendingUp className="text-danger" />
              </h5>
            </ListGroup.Item>
            <ListGroup.Item className="btn list-group-item-action flex-column align-items-start ">
              <span class="mb-1">Mise en paiement d'un dossier:</span>
              <h5 className="widgetSmallMontant text-center font-weight-bold">
                {" "}
                91.3 jours <TrendingUp className="text-danger" />
              </h5>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
