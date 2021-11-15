import React from "react"
import ContactForm from "../../components/ContactForm/ContactForm"
import Footer from "../../components/Footer/Footer"
import classes from "./Finish.module.css"
import { Col, Row } from "react-bootstrap"
const Finish = () => {
  return (
    <Row id="finish">
      <Col className={classes.finish}>
        <div>
          <ContactForm />
          <Footer />
        </div>
      </Col>
    </Row>
  )
}

export default Finish
