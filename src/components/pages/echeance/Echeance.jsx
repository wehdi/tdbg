import "./echeance.css";
import { DataGrid } from "@material-ui/data-grid";
import { echeanceRows, echeanceColumns } from "../../../dummyData";
import RightWidget from "../../rightWidget/RightWidget";
import { dataEcheance } from "../../../dummyData";
import { Container, Row, Col } from "react-bootstrap";

export default function echeance() {
  return (
    <Container className="echeance text-dark">
      <Row>
        <Col sm={12}>
          <h2 className="text-center font-weight-bold">Echeances en chiffres :</h2>
          <div style={{ height: 400, width: "110%" }}>
            <DataGrid
              rows={echeanceRows}
              columns={echeanceColumns}
              pageSize={5}
              //checkboxSelection
              disableSelectionOnClick
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
