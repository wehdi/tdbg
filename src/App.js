import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/pages/home/Home";
import EcheanceDetails from "./components/pages/echeanceDetails/EcheanceDetails";
import Finance from "./components/pages/finance/Finance";
import Echeance from "./components/pages/echeance/Echeance";
import NotFound from "./components/pages/notFound/NotFound";
import "react-app-polyfill/stable";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
} from "react-router-dom";
function App() {
  return (
    <HashRouter basename="/home">
      <Container className="app">
        <Row>
          <Topbar />
        </Row>
        <Row>
          <Col sm={2}>
            <Sidebar />
          </Col>
          <Col sm={10}>
            <Switch>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route path="/echeance">
                <Echeance />
              </Route>
              <Route path="/finances">
                <Finance />
              </Route>
              <Route path="/echeanceDetails">
                <EcheanceDetails />
              </Route>
              <Route path="*" component={NotFound} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </HashRouter>
  );
}

export default App;
