import React from "react"
import classes from "./OurContacts.module.css"
import { socialRoutes } from "../../store/routes"
import { BsTelephoneInbound } from "react-icons/bs"
const OurContacts = () => {
  return (
    <div className={classes.contacts}>
      <h2>
        Наши
        <mark
          style={{
            backgroundColor: "#20255c",
            color: "white",
            margin: "1rem",
          }}
        >
          контакты:
        </mark>
      </h2>

      <div className={classes.items}>
        <h4>Обращайтесь любым удобным способом:</h4>

        <a href="tel:+380980438385" className={classes.link}>
          <BsTelephoneInbound />
          Позвоните нам! +38(098)043 83 85
        </a>
        {socialRoutes.map((item, index) => {
          return (
            <div>
              <a href={item.path} key={index} className={classes.link}>
                {item.component} {item.text} {item.content}
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default OurContacts
