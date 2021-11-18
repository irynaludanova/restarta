import React from "react"
import classes from "./Questions.module.css"
import { Row, Col } from "react-bootstrap"
import Accord from "../../components/Accord/Accord"
const Questions = () => {
  return (
    <Row id="questions">
      <Col className={classes.questions}>
        <h3>
          {" "}
          <mark style={{ backgroundColor: "green" }}>ЧА</mark>сто задаваемые
          ВОпросы
        </h3>
        <Accord />
      </Col>
    </Row>
  )
}

export default Questions
