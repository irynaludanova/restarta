import Button from "./../../UI/button/Button"
import React from "react"
import restarta from "./../../assets/images/restarta.png"
import classes from "./OfferLeft.module.css"
import OfferRight from "../OfferRight/OfferRight"
import { Col } from "antd"

const OfferLeft = () => {
  return (
    <Col className={classes.left}>
      <img className={classes.image} src={restarta} alt="Restart-A" />
      <h1>
        перезагрузка <br></br>вашего сайта
      </h1>
      <Button>начать</Button>
      <div className={classes.mobile}>
        <OfferRight />
      </div>
    </Col>
  )
}

export default OfferLeft
