import React from "react"
import { Row, Nav, Navbar, NavDropdown, Container } from "react-bootstrap"
import "./Navigation.css"
import { HashLink as LinkS } from "react-router-hash-link"
import toggler from "./../../assets/images/toggler.png"
import Logo from "../Logo/Logo"

const Navigation = () => {
  return (
    <Row>
      <Navbar collapseOnSelect expand={false} className="navbar">
        <Container fluid>
          <Navbar.Brand href="#main">
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll">
            <img src={toggler} alt="toggler" />
          </Navbar.Toggle>
          <Navbar.Collapse className="collapse" id="navbarScroll">
            <Nav className="me-auto">
              <LinkS smooth to="#main" className="nav-link">
                Главная
              </LinkS>
              <Nav.Link href="#about">О нас</Nav.Link>
              <Nav.Link href="#advantages">Наши преимущества</Nav.Link>
              <Nav.Link href="#questions">ЧаВо</Nav.Link>
              <Nav.Link href="#contact">Оставить заявку</Nav.Link>
              <NavDropdown title="Статьи" id="basic-nav-dropdown">
                <NavDropdown.Item href="#articles/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#articles/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#articles/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#articles/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  )
}

export default Navigation
