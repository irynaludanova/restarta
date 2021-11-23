import { Card, Badge } from "antd"
import React from "react"
import classes from "./ContactDescription.module.css"
const ContactDescription = () => {
  return (
    <Badge.Ribbon color="#20255c" text="бесплатно">
      <Card className={classes.card}>
        <span>
          Еще не решили, пора ли поработать над сайтом? Или не уверены, что
          вообще что-то нужно менять?
          <br /> Оставьте заявку с указанием адреса действующего сайта. <br />
          Мы проанализируем Ваш сайт и дадим подробный отчет , что и как можно
          изменить.
          <br /> Это совершенно БЕСПЛАТНО и ни к чему Вас не обязывает. <br />А
          дальше - решать Вам.
        </span>
      </Card>
    </Badge.Ribbon>
  )
}

export default ContactDescription
