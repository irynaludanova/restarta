import { Col } from "antd"
import React from "react"
import TextAnimations from "../../animations/TextAnimations/TextAnimations"
import { offerText } from "./../../store/offerText"
import classes from "./OfferRight.module.css"
import { FormattedMessage } from "react-intl"

const OfferRight = () => {
  return (
    <Col className={classes.right}>
      <ul>
        {offerText.map(({ id, key }) => (
          // <TextAnimations key={item.id}>{item.text}</TextAnimations>
          <h2 key={id}>
            <FormattedMessage id={key} />
          </h2>
        ))}
      </ul>
    </Col>
  )
}

export default OfferRight
