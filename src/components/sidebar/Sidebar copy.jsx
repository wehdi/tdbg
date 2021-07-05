import React from "react";
import "./sidebar.css";
import {
  Home,
  Public,
  Work,
  Timeline,
  MonetizationOnSharp,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container, Image } from "react-bootstrap";

export default function Sidebar() {
  return (
    /* <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Direction Generale</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" /> Home
              </li>
            </Link>
            <Link to="/echeance" className="link">
              <li className="sidebarListItem">
                <Public className="sidebarIcon" /> Echeance
              </li>
            </Link>
            <li className="sidebarListItem">
              <VpnLock className="sidebarIcon" /> Trop percu
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" /> Finances
            </li>
          </ul>
          <h3 className="sidebarTitle">Direction Agence</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <LineStyle className="sidebarIcon" /> Home
            </li>
            <li className="sidebarListItem">
              <Public className="sidebarIcon" /> Echeance
            </li>
            <li className="sidebarListItem">
              <VpnLock className="sidebarIcon" /> Trop percu
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" /> Finances
            </li>
          </ul>
        </div>
      </div>
      */
    <Nav defaultActiveKey="/" className="flex-column sidebar" sticky="top">
      <Navbar.Brand className="sidebarTitle " sticky="top">
        <Container>Dashboard</Container>
      </Navbar.Brand>
      <Nav.Link href="/" className="d-inline-flex rounded">
        <Home className="sidebarIcon active" /> Home
      </Nav.Link>
      <Nav.Link
        href="echeance"
        eventKey="echeance"
        className="d-inline-flex rounded"
      >
        <Public className="sidebarIcon d-inline-flex" /> Echeance
      </Nav.Link>
      <Nav.Link href="tp" eventKey="link-2" className="d-inline-flex rounded">
        <MonetizationOnSharp className="sidebarIcon" />
        Trop percu
      </Nav.Link>
      <Nav.Link
        href="finance"
        eventKey="link-2"
        className="d-inline-flex rounded"
      >
        <Timeline className="sidebarIcon" />
        Finance
      </Nav.Link>
      <Navbar.Brand className="sidebarTitle " sticky="top">
        <Container>Dashboard 2</Container>
      </Navbar.Brand>
      <Nav.Link
        href="administration"
        eventKey="link-2"
        className="d-inline-flex rounded"
      >
        <Work className="sidebarIcon" />
        Administration
      </Nav.Link>
      <Nav.Link
        href="finance"
        eventKey="link-2"
        className="d-inline-flex rounded"
      >
        <Timeline className="sidebarIcon" />
        Realisation
      </Nav.Link>
      <Nav.Link
        href="finance"
        eventKey="link-2"
        className="d-inline-flex rounded"
      >
        <Timeline className="sidebarIcon" />
        Finance
      </Nav.Link>
    </Nav>
  );
}
