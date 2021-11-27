import Button from "./../../UI/button/Button"
import React from "react"
import classes from "./OfferLeft.module.css"
import OfferRight from "../OfferRight/OfferRight"
import { Col } from "antd"
import { FormattedMessage } from "react-intl"
import Particles from "../../animations/Particles/Particles"
const OfferLeft = () => {
  return (
    <Col className={classes.left}>
      <h1>
        <FormattedMessage id="reboot_1" />
      </h1>
      <h1>
        <FormattedMessage id="reboot_2" />
      </h1>

      <Button>
        <a href="#form">
          <FormattedMessage id="startbutton" />
        </a>
      </Button>
      <div className={classes.mobile}>
        <Particles bg={true} />

        <OfferRight />
      </div>
    </Col>
  )
}

export default OfferLeft
