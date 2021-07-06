import React from "react";
import {
  Navbar,
  Nav,
  OverlayTrigger,
  Container,
  Popover,
} from "react-bootstrap";
import "./topbar.css";
import { NotificationsNone, Settings, InfoOutlined } from "@material-ui/icons";

export default function Topbar() {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Alerte</Popover.Title>
      <Popover.Content>
        Le cout de liquidation d'un dossier au niveau <strong>Skikda</strong> à
        depasser le seuil autorisé.
      </Popover.Content>
    </Popover>
  );
  return (
    <Nav>
      <Navbar fixed="top" className="topbar">
        <Navbar.Brand className=" topbarLogo text-light">
          <img
            src={process.env.PUBLIC_URL + "/CNR-LOGO.png"}
            width="150"
            height="90"
            alt="CNR Avatar"
            className="rounded"
          />
        </Navbar.Brand>

        <Nav className="ml-auto ">
          <OverlayTrigger
            rootClose
            trigger="click"
            placement="bottom"
            overlay={popover}
          >
            <Nav.Link class="btn  position-relative ">
              <NotificationsNone className="text-light  ml-2 my-2 " />
              <span class="position-absolute text-light badge rounded-pill bg-danger my-1">
                1
              </span>
            </Nav.Link>
          </OverlayTrigger>
          <Nav.Link to="/settings" class="btn  position-relative ">
            <Settings className="text-light topbarIcon ml-2 my-2" />
          </Nav.Link>
          <Nav.Link to="about" class="btn  position-relative ">
            <InfoOutlined className="text-light  ml-2 my-2 rounded" />
          </Nav.Link>
          <Nav.Link to="settings"></Nav.Link>
          <Navbar.Brand className=" btn btn-outline-light text-light">
            <h5 className="text-center font-weight-bold my-2">
              | Directeur - SKIKDA
            </h5>
          </Navbar.Brand>
          <Navbar.Brand to="/">
            <img
              src={process.env.PUBLIC_URL + "/lego.jpg"}
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
