import React from "react"
import { Col, Row } from "antd"
import classes from "./ContactForm.module.css"
import ContactDescription from "../../components/ContactDescription/ContactDescription"
import CustomForm from "../../components/CustomForm/CustomForm"
import { FormattedMessage } from "react-intl"
const Contact = () => {
  return (
    <div id="form" className={classes.container}>
      <Row>
        <Col>
          <h2>
            <FormattedMessage id="contact_form_title_1" />
            <mark
              style={{
                backgroundColor: "#20255c",
                color: "white",
                margin: "1rem",
              }}
            >
              <FormattedMessage id="contact_form_title_2" />
            </mark>
            ?
          </h2>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={20} sm={20} md={10} lg={10} xl={10}>
          <ContactDescription />
        </Col>
        <Col xs={20} sm={20} md={12} lg={12} xl={12}>
          <CustomForm />
        </Col>
      </Row>
    </div>
  )
}
export default Contact
