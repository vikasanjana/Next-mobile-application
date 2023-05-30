import React from "react";
import MainMenu from "./components/MainMenu/MainMenu";
import { MenuItems } from "./components/Menu";
import * as Icons from "react-bootstrap-icons";
import {
  Container,
  Navbar,
  Button,
  ListGroup,
  Nav,
  Tab,
} from "react-bootstrap";

const MainSidebar = () => {
  return (
    <div id="navbar" className="sidenav d-flex flex-column overflow-scroll">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/" className=" mb-0 h3 logo">
            <img
              src="./images/logo-main.svg"
              className="d-inline-block align-top img-fluid"
              alt="Codingkart logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>

      {/* Page list  */}
      <div className="my-2 d-flex flex-column">
        <Button variant="outline-secondary" size="sm" className="mx-2">
          <Icons.FileEarmarkPlus />
          Add Page
        </Button>
        <ListGroup className="pages">
          <ListGroup.Item className="d-flex justify-content-between align-item-center">
            Home
            <div className="m-2 d-flex flex-row gap-2">
              <Icons.PencilFill />
              <Icons.Trash />
            </div>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between align-item-center">
            About
            <div className="m-2 d-flex flex-row gap-2">
              <Icons.PencilFill />
              <Icons.Trash />
            </div>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between align-item-center">
            Contact
            <div className="m-2 d-flex flex-row gap-2">
              <Icons.PencilFill />
              <Icons.Trash />
            </div>
          </ListGroup.Item>
        </ListGroup>
      </div>

      {/* Settigs tabs */}
      <div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="block-tab">
          <Nav variant="tabs" defaultActiveKey="block-tab">
            <Nav.Item>
              <Nav.Link eventKey="block-tab">
                <Icons.GridFill />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="trait">
                <Icons.LayersFill />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="style-tab">
                <Icons.PaletteFill />
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="block-tab">
              <div id="blocks"></div>
            </Tab.Pane>
            <Tab.Pane eventKey="trait">
              <div id="layer-container"></div>
            </Tab.Pane>
            <Tab.Pane eventKey="style-tab">
              <div id="style-container"></div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
};

export default MainSidebar;
