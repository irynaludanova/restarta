import React from "react"
import classes from "./CustomFooter.module.css"
import { HashLink as Link } from "react-router-hash-link"

import { Row, Col } from "antd"

import Social from "../../components/Social/Social"
import { HashLink as LinkS } from "react-router-hash-link"
import Logo from "./../../components/Logo/Logo"
import { routes } from "./../../store/routes"
import { FaRegCopyright } from "react-icons/fa"
import BackToTop from "../../UI/backToTop/BackToTop"

const CustomFooter = () => {
  return (
    <Row className={classes.custom}>
      <Col span={6} className={classes.copy}>
        <div className={classes.logo}>
          <LinkS smooth to="#main">
            <Logo className={classes.logo} />
          </LinkS>
        </div>
        <div className={classes.copiright}>
          <FaRegCopyright />
          {new Date().getFullYear()}
        </div>
      </Col>
      <Col span={7}>
        <ul className={classes.links}>
          {routes.map((item, index) => {
            return (
              <Link key={index} smooth to={item.path} className={classes.link}>
                {item.component}
              </Link>
            )
          })}
        </ul>
      </Col>
      <Col span={8} className={classes.social}>
        <Social />
      </Col>
      <Col span={1}>
        <BackToTop />
      </Col>
    </Row>
  )
}

export default CustomFooter
