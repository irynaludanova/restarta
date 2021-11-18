import React from "react"
import classes from "./Advantages.module.css"
import { Row, Col } from "react-bootstrap"
import AdvantageCard from "../../components/AdvantageCard/AdvantageCard"
import { advantageStore } from "../../store/advantageStore"
const Advantages = () => {
  return (
    <Row id="advantage">
      <Col className={classes.advantages}>
        <h3> наши преимущества</h3>
        <Row className={classes.advantage}>
          {advantageStore.map((item, index) => {
            return (
              <Col
                key={index}
                sm={12}
                md={4}
                lg={3}
                xl={2}
                className={classes.card}
              >
                <AdvantageCard text={item} />
              </Col>
            )
          })}
        </Row>
      </Col>
    </Row>
  )
}

export default Advantages
