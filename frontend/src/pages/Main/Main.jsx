import React from "react"
import { Row, Col } from "antd"
import OfferLeft from "../../components/OfferLeft/OfferLeft"
import OfferRight from "../../components/OfferRight/OfferRight"
import classes from "./Main.module.css"
import arrow from "./../../assets/images/bigarrow.png"
const Main = () => {
  return (
    <>
      <Row className={classes.main} id="main">
        <Col xs={24} sm={24} md={12} lg={12} xl={12} className={classes.left}>
          <OfferLeft />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} className={classes.right}>
          <OfferRight />
        </Col>
      </Row>
      <Row className={classes.arrow}>
        <Col>
          <img src={arrow} alt="big arrow" />
        </Col>
      </Row>
    </>
  )
}

export default Main
