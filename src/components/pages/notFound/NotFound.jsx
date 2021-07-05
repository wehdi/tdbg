import { useLocation } from "react-router-dom";
import "./notFound.css";
import { Container, Col, Row } from "react-bootstrap";
export default function NotFound() {
  const { pathname } = useLocation();

  return (
    <Col sm={12} className="notFound">
     <h2>Rak mwadar :)</h2>
    </Col>
  );
}
