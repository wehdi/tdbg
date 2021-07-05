import "./echeanceChart.css";
import { Line } from "react-chartjs-2";
import { Card, Row, Col } from "react-bootstrap";

export default function EcheanceChart({ title, data, dataKey, grid }) {
  return (
      
    <Row>
      <Col sm={12}>
        <Line
          className="echeanceChart shadow  bg-light border border-primary"
          data={data}
          options={{
            legend: {
              display: true,
              position: "right",
              maintainAspectRatio: false,
            },
          }}
        />
      </Col>
    </Row>

  );
}
