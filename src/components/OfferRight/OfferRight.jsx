import React from "react"
import TextAnimations from "./../../animations/TextAnimations"
import { offerText } from "./../../store/offerText"
import classes from "./OfferRight.module.css"
const OfferRight = () => {
  return (
    <div className={classes.right}>
      {offerText.map((item) => (
        <TextAnimations key={item.id}>{item.text}</TextAnimations>
      ))}
    </div>
  )
}

export default OfferRight
