import { Col } from "antd"
import React from "react"
import TextAnimations from "../../animations/TextAnimations/TextAnimations"
import { offerText } from "./../../store/offerText"
import classes from "./OfferRight.module.css"
const OfferRight = () => {
  return (
    <Col className={classes.right}>
      <div>
        <ul>
          {offerText.map((item) => (
            <TextAnimations key={item.id}>{item.text}</TextAnimations>
          ))}
        </ul>
      </div>
    </Col>
  )
}

export default OfferRight
