import React from "react"
import classes from "./AdvantageCard.module.css"
import { Card } from "antd"
import { FormattedMessage } from "react-intl"

const AdvantageCard = (props) => {
  return (
    <Card className={classes.container}>
      <div className={classes.box}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>

        <div className={classes.content}>
          <p>
            <FormattedMessage id={props.key1} />
            <p>
              <FormattedMessage id={props.key2} />
            </p>
            <p>
              <FormattedMessage id={props.key3} />
            </p>
          </p>
        </div>
      </div>
    </Card>
  )
}

export default AdvantageCard
