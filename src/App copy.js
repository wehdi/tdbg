import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/pages/home/Home";
import Echeance from "./components/pages/echeance/Echeance";
import NotFound from "./components/pages/notFound/NotFound";
import "react-app-polyfill/stable";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Container>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/echeance">
              <Echeance />
            </Route>
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Container>
    </Router>
  );
}

export default App;
