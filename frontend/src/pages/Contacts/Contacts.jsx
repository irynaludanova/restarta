import { Row, Col } from "antd"
import React from "react"
import Description from "../../components/Description/Description"
import OurContacts from "../../components/OurContacts/OurContacts"
import classes from "./Contacts.module.css"
const Contacts = () => {
  return (
    <div id="contact" className={classes.contact}>
      <Row justify="space-between" align="bottom">
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <OurContacts />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Description />
        </Col>
      </Row>
    </div>
  )
}

export default Contacts
