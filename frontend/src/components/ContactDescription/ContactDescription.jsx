import { Card, Badge } from "antd"
import React from "react"
import { FormattedMessage } from "react-intl"
import classes from "./ContactDescription.module.css"
const ContactDescription = () => {
  const text = <FormattedMessage id="badge" />
  return (
    <Badge.Ribbon color="#20255c" text={text}>
      <Card className={classes.card}>
        <span>
          <FormattedMessage id="contact_desc" />
        </span>
      </Card>
    </Badge.Ribbon>
  )
}

export default ContactDescription
