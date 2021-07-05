import React from "react";
import { Navbar, Nav, Button, Container, Image } from "react-bootstrap";
import "./topbar.css";
import { NotificationsNone, Settings, InfoOutlined } from "@material-ui/icons";

export default function Topbar() {
  return (
    <Nav>
      <Navbar fixed="top" className="topbar">
        <Navbar.Brand className=" topbarLogo text-light">
        <img
              src={process.env.PUBLIC_URL + '/CNR-LOGO.png'}
              width="150"
              height="90"
              alt="CNR Avatar"
              className="rounded"
            />
        </Navbar.Brand>

        <Nav className="ml-auto ">
          <Nav.Link class="btn  position-relative ">
            <NotificationsNone className="text-light  ml-2 my-2 " />
            <span class="position-absolute text-light badge rounded-pill bg-danger my-1">
              2
            </span>
          </Nav.Link>
          <Nav.Link href="settings" class="btn  position-relative ">
            <Settings className="text-light topbarIcon ml-2 my-2" />
          </Nav.Link>
          <Nav.Link href="about" class="btn  position-relative ">
            <InfoOutlined className="text-light  ml-2 my-2 rounded" />
          </Nav.Link>
          <Nav.Link href="settings"></Nav.Link>
          <Navbar.Brand className=" btn btn-outline-light text-light">
            <h5 className="text-center font-weight-bold my-2">
              | Directeur - SKIKDA 
            </h5>
          </Navbar.Brand>
          <Navbar.Brand href="/">
            <img
              src={process.env.PUBLIC_URL + '/lego.jpg'}
              width="50"
              height="50"
              alt="CNR Avatar"
              className="rounded-circle border border-light"
            />
          </Navbar.Brand>
        </Nav>
      </Navbar>
    </Nav>
  );
}
