import React from "react"
import classes from "./Advantages.module.css"
import { Row, Col } from "antd"
import AdvantageCard from "../../components/AdvantageCard/AdvantageCard"
import { advantageStore } from "../../store/advantageStore"
const Advantages = () => {
  return (
    <div id="advantage" className={classes.advantages}>
      <h3>
        <mark
          style={{
            backgroundColor: "#20255c",
            color: "white",
            margin: "1rem",
          }}
        >
          наши
        </mark>
        преимущества
      </h3>

      <Row>
        <div className={classes.advantage}>
          {advantageStore.map((item, index) => {
            return (
              <Col key={index} xs={24} sm={24} md={12} lg={8} xl={6}>
                <AdvantageCard className={classes.card} text={item} />
              </Col>
            )
          })}
        </div>
      </Row>
    </div>
  )
}

export default Advantages
