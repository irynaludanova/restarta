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
          <h3 className={classes.white}>
            <FormattedMessage id={props.id} />
          </h3>
        </div>
      </div>
    </Card>
  )
}

export default AdvantageCard
