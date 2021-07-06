import React from "react";
import ReactDOM from "react-dom";
import "./sidebar.css";
import {
  Home,
  PaymentOutlined,
  Public,
  Work,
  Timeline,
  HourglassEmpty,
} from "@material-ui/icons";
import { Navbar, Nav } from "react-bootstrap";
import { Link, NavLink, useLocation } from "react-router-dom";
<script></script>;

export default function Sidebar() {
  return (
    <Nav>
      <Navbar
        fixed="top"
        className="col-md-2 d-none d-inline sidebar hide bg-primary"
      >
        <Nav.Item>
          <h3> ~ Dashboard</h3>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/home" activeClassName="active">
            <Home className="sidebarIcon" />
            Home
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/finances" activeClassName="active">
            <Timeline className="sidebarIcon" />
            Finances
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/echeance" activeClassName="active">
            <PaymentOutlined className="sidebarIcon" />
            Echeance
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/instances" activeClassName="active">
            <HourglassEmpty className="sidebarIcon" />
            Instances
          </NavLink>
        </Nav.Item>

        <Nav.Item>
          <h3>Details</h3>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/echeanceDetails" activeClassName="active">
            <Work className="sidebarIcon" />
            Echeances
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/financesDetails" activeClassName="active">
            <Public className="sidebarIcon" />
            Finances
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/instancesDetaiks" activeClassName="active">
            <HourglassEmpty className="sidebarIcon" />
            Instances
          </NavLink>
        </Nav.Item>
      </Navbar>
    </Nav>
  );
}
