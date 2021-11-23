import React from "react"
import classes from "./Questions.module.css"
import { Row, Col } from "antd"
import Accord from "../../components/Accord/Accord"
const Questions = () => {
  return (
    <div id="questions" className={classes.questions}>
      <Row>
        <Col>
          <h3>
            <mark style={{ backgroundColor: "#20255c", color: "white" }}>
              ЧА
            </mark>
            сто задаваемые
            <mark style={{ backgroundColor: "#20255c", color: "white" }}>
              ВО
            </mark>
            просы
          </h3>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={22} sm={22} md={20} lg={20} xl={20}>
          <Accord />
        </Col>
      </Row>
    </div>
  )
}

export default Questions
