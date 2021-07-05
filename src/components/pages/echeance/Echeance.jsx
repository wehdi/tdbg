import "./echeance.css";
import { DataGrid } from "@material-ui/data-grid";
import { echeanceRows, echeanceColumns } from "../../../dummyData";
import RightWidget from "../../rightWidget/RightWidget";
import { dataEcheance } from "../../../dummyData";
import { Container, Row, Col } from "react-bootstrap";

export default function echeance() {
  return (
    <Container className="echeance">
      <Row>
        <Col sm={12}>
          <div style={{ height: 400, width: "100%" }}>
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
