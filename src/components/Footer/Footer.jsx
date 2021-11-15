import React from "react"
import { Nav, Row, Col } from "react-bootstrap"
import classes from "./Footer.module.css"
import Social from "../Social/Social"
import { HashLink as LinkS } from "react-router-hash-link"
import Logo from "./../Logo/Logo"
import { routes } from "./../../store/routes"
import { FaRegCopyright } from "react-icons/fa"

const Footer = () => {
  return (
    <Row className={classes.footer}>
      <Col className={classes.copy}>
        <div className={classes.logo}>
          <LinkS smooth to="#main">
            <Logo style={{ width: "80%" }} />
          </LinkS>
        </div>

        <div>
          <FaRegCopyright />
          {new Date().getFullYear()}
        </div>
      </Col>
      <Col>
        {routes.map((item, index) => {
          return (
            <Nav.Link key={index} href={item.path} className={classes.link}>
              {item.component}
            </Nav.Link>
          )
        })}
      </Col>
      <Col className={classes.social}>
        <Social />
      </Col>
    </Row>
  )
}

export default Footer
