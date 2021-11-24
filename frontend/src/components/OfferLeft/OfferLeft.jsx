import Button from "./../../UI/button/Button"
import React from "react"
import restarta from "./../../assets/images/restarta.png"
import classes from "./OfferLeft.module.css"
import OfferRight from "../OfferRight/OfferRight"
import { Col } from "antd"
import { FormattedMessage } from "react-intl"
const OfferLeft = () => {
  return (
    <Col className={classes.left}>
      <img className={classes.image} src={restarta} alt="Restart-A" />
      <h1>
        <FormattedMessage id="reboot" />
      </h1>
      <h1>
        <FormattedMessage id="site" />
      </h1>
      <Button>
        <a href="#form">начать</a>
      </Button>
      <div className={classes.mobile}>
        <OfferRight />
      </div>
    </Col>
  )
}

export default OfferLeft
