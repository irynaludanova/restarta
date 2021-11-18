import React from "react"
import classes from "./Social.module.css"
import { socialRoutes } from "../../store/routes"

const Social = () => {
  return (
    <>
      <p>Наши контакты:</p>
      <div className={classes.social}>
        {socialRoutes.map((item, index) => {
          return (
            <a href={item.path} key={index}>
              {item.component}
            </a>
          )
        })}
      </div>
    </>
  )
}

export default Social
