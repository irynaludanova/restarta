import { Card, Badge } from "antd"
import React from "react"
import { FormattedMessage } from "react-intl"
import classes from "./ContactDescription.module.css"
const ContactDescription = () => {
  const text = <FormattedMessage id="badge" />
  return (
    <Badge.Ribbon color="#20255c" text={text} className={classes.badge}>
      <Card className={classes.card}>
        <p className={classes.desc}>
          <FormattedMessage id="contact_desc" />
        </p>
      </Card>
    </Badge.Ribbon>
  )
}

export default ContactDescription
