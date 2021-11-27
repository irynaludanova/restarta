import React from "react"
import classes from "./Advantages.module.css"
import { Row, Col } from "antd"
import AdvantageCard from "../../components/AdvantageCard/AdvantageCard"
import { advantageStore } from "../../store/advantageStore"
import { FormattedMessage } from "react-intl"
const Advantages = () => {
  return (
    <div id="advantage" className={classes.advantages}>
      <h2 className={classes.desc}>
        <mark>
          <FormattedMessage id="adv_title_1" />
        </mark>
        <FormattedMessage id="adv_title_2" />
      </h2>

      <Row>
        <div className={classes.advantage}>
          {advantageStore.map(({ key1, index }) => {
            return (
              <Col key={key1} xs={24} sm={24} md={12} lg={8} xl={6}>
                <AdvantageCard key={index} id={key1} className={classes.card} />
              </Col>
            )
          })}
        </div>
      </Row>
    </div>
  )
}

export default Advantages
