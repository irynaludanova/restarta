import React from "react"
import classes from "./Advantages.module.css"
import { Row, Col } from "antd"
import AdvantageCard from "../../components/AdvantageCard/AdvantageCard"
import { advantageStore } from "../../store/advantageStore"
import { FormattedMessage } from "react-intl"
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
          <FormattedMessage id="adv_title_1" />
        </mark>
        <FormattedMessage id="adv_title_2" />
      </h3>

      <Row>
        <div className={classes.advantage}>
          {advantageStore.map(({ key1, key2, key3, index }) => {
            return (
              <Col xs={24} sm={24} md={12} lg={8} xl={6}>
                <AdvantageCard
                  key={index}
                  key1={key1}
                  key2={key2}
                  key3={key3}
                  className={classes.card}
                />
              </Col>
            )
          })}
        </div>
      </Row>
    </div>
  )
}

export default Advantages
