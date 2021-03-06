import React from "react"
import { aboutImageText as words } from "../../store/aboutImageText"
import classes from "./AboutImageWords.module.css"

const AboutImageWords = () => {
  return (
    <div className={classes.words}>
      {words.map((item, index) => {
        const style = {
          color: item.color,
          fontSize: item.fontSize,
          top: item.top,
          left: item.left,
          writingMode: item.orientation,
        }
        return (
          <div className={classes.word} key={index} style={style}>
            {item.text}
          </div>
        )
      })}
    </div>
  )
}

export default AboutImageWords
