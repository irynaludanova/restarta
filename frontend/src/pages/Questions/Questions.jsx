import React from "react"
import classes from "./Questions.module.css"
import { Row, Col } from "antd"
import Accord from "../../components/Accord/Accord"
import { FormattedMessage } from "react-intl"
const Questions = () => {
  return (
    <div id="questions" className={classes.questions}>
      <Row>
        <Col>
          <h2 className={classes.desc}>
            <mark>
              <FormattedMessage id="quest_title_1" />
            </mark>
            <FormattedMessage id="quest_title_2" />
            <mark>
              <FormattedMessage id="quest_title_3" />
            </mark>
            <FormattedMessage id="quest_title_4" />
            <mark>
              <FormattedMessage id="quest_title_5" />
            </mark>
            <FormattedMessage id="quest_title_6" />
          </h2>
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
