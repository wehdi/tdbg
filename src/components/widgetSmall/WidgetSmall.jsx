import "./widgetSmall.css";
import { AccountBalance } from "@material-ui/icons";
import { Card, Row, Col, ListGroup,Container } from "react-bootstrap";

export default function WidgetSmall() {
  return (
    /* <div className="widgetSmall">
      <span className="widgetSmallTitle">Classement Echeance</span>
      <ul className="widgetSmallList">
        <li className="widgetSmallItem">
          <div className="widgetSmallCaisse">
            <span className="widgetSmallName">Oran : </span>
            <span className="widgetSmallMontant">3 123 125 214.23 DA</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility className="widgetSmallIcon" />
            Consulter
          </button>
        </li>
        <li className="widgetSmallItem">
          <div className="widgetSmallCaisse">
            <span className="widgetSmallName">Alger est : </span>
            <span className="widgetSmallMontant">3 00 236 214.23 DA</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility className="widgetSmallIcon" />
            Consulter
          </button>
        </li>
        <li className="widgetSmallItem">
          <div className="widgetSmallCaisse">
            <span className="widgetSmallName">Setif : </span>
            <span className="widgetSmallMontant">3 000 026 45.23 DA</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility className="widgetSmallIcon" />
            Consulter
          </button>
        </li>
        <li className="widgetSmallItem">
          <div className="widgetSmallCaisse">
            <span className="widgetSmallName">Constantine : </span>
            <span className="widgetSmallMontant">2 998 987 214.23 DA</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility className="widgetSmallIcon" />
            Consulter
          </button>
        </li>
        <li className="widgetSmallItem">
          <div className="widgetSmallCaisse">
            <span className="widgetSmallName">Skikda : </span>
            <span className="widgetSmallMontant">2 853 987 569.02 DA</span>
          </div>
          <button className="widgetSmallButton">
            <Visibility className="widgetSmallIcon" />
            Consulter
          </button>
        </li>
      </ul>
    </div>*/
    <Container>
      <Row>
        <Col sm={12}>
          <ListGroup className="border border-primary">
            <ListGroup.Item className="btn list-group-item-action flex-column align-items-start list-group-item-secondary ">
              <h4 class="mb-1 font-weight-bold"><AccountBalance className="mx-1"/>Echeances :</h4>
            </ListGroup.Item>
            <ListGroup.Item className="btn list-group-item-action flex-column align-items-start ">
              <span class="badge badge-primary badge-pill mx-1">1 </span>
              <span class="mb-1">Oran :</span>
              <h5 className="widgetSmallMontant">3 000 236 214.23 DA</h5>
            </ListGroup.Item>
            <ListGroup.Item className="btn list-group-item-action flex-column align-items-start ">
              <span class="badge badge-primary badge-pill mx-1">2 </span>
              <span class="mb-1">Alger-Nord :</span>
              <h5 className="widgetSmallMontant">2 982 321 983.02 DA</h5>
            </ListGroup.Item>
            <ListGroup.Item className="btn list-group-item-action flex-column align-items-start ">
              <span class="badge badge-primary badge-pill mx-1">3 </span>
              <span class="mb-1">Setif :</span>
              <h5 className="widgetSmallMontant display-5">
                2 452 448 703.14 DA
              </h5>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
