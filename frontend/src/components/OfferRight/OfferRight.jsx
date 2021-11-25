import { Col } from "antd"
import React from "react"
import { offerText } from "./../../store/offerText"
import classes from "./OfferRight.module.css"
import { FormattedMessage } from "react-intl"

const OfferRight = () => {
  return (
    <Col className={classes.right}>
      <ul className={classes.dynamic}>
        <li>
          {offerText.map(({ id, key }) => (
            <h2 key={id} className={classes.animate}>
              <FormattedMessage id={key} />
            </h2>
          ))}
        </li>
      </ul>
    </Col>
  )
}

export default OfferRight
