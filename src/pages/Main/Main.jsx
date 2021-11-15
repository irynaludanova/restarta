import React from "react"
import { Col, Row } from "react-bootstrap"
import BigArrow from "../../components/BigArrow/BigArrow"
import OfferLeft from "../../components/OfferLeft/OfferLeft"
import OfferRight from "../../components/OfferRight/OfferRight"
import classes from "./Main.module.css"
const Main = () => {
  return (
    <>
      <Row className={classes.main} id="main">
        <Col className={classes.left}>
          <OfferLeft />
        </Col>
        <Col className={classes.right}>
          <OfferRight />
        </Col>
      </Row>
      <Row className={classes.arrow}>
        <Col>
          <BigArrow />
        </Col>
      </Row>
    </>
  )
}

export default Main
