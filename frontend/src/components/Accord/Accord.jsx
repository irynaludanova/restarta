import React from "react"
import { questionsStore } from "../../store/questionsStore"
import { Accordion } from "react-bootstrap"
import classes from "./Accord.module.css"
const Accord = () => {
  return (
    <Accordion className={classes.accordion} defaultActiveKey="0">
      {questionsStore.map((item, index) => {
        return (
          <Accordion.Item className={classes.item} key={index} eventKey={index}>
            <Accordion.Header className={classes.header}>
              {item.questionText}
            </Accordion.Header>
            <Accordion.Body>{item.answerText}</Accordion.Body>
          </Accordion.Item>
        )
      })}
    </Accordion>
  )
}

export default Accord
