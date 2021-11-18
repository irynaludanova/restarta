import React from "react"
import classes from "./AdvantageCard.module.css"
import { Card } from "react-bootstrap"
const AdvantageCard = ({ text }) => {
  return (
    <Card className={classes.container}>
      <div className={classes.box}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>

        <div className={classes.content}>
          <p>{text.text1}</p>
          <p>{text.text2}</p>
          <p>{text.text3}</p>
        </div>
      </div>
    </Card>
  )
}

export default AdvantageCard
