import React from "react"
import classes from "./OurContacts.module.css"
import { socialRoutes } from "../../store/routes"
import { BsTelephoneInbound } from "react-icons/bs"
import { FormattedMessage } from "react-intl"
const OurContacts = () => {
  return (
    <div className={classes.contacts}>
      <h2>
        <FormattedMessage id="contact_title_1" />
        <mark>
          <FormattedMessage id="contact_title_2" />
        </mark>
      </h2>

      <div className={classes.items}>
        <h4>
          <FormattedMessage id="contact_text_1" />
        </h4>

        <a href="tel:+380980438385" className={classes.link}>
          <BsTelephoneInbound />
          <FormattedMessage id="contact_text_2" />
        </a>
        {socialRoutes.map((item, index) => {
          return (
            <div key={index}>
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
