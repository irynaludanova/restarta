import React from "react"
import { questionsStore } from "../../store/questionsStore"
import "./Accord.css"
import { Collapse } from "antd"
import { CaretRightOutlined } from "@ant-design/icons"
import { FormattedMessage } from "react-intl"
const { Panel } = Collapse
const Accord = () => {
  return (
    <Collapse
      bordered={false}
      defaultActiveKey={["1"]}
      expandIcon={({ isActive }) => (
        <CaretRightOutlined rotate={isActive ? 90 : 0} />
      )}
      className="site-collapse-custom-collapse"
    >
      {questionsStore.map(({ id, key_q, key_a }) => {
        const header = <FormattedMessage id={key_q} />
        return (
          <Panel
            header={header}
            key={id}
            className="site-collapse-custom-panel"
          >
            <p>
              <FormattedMessage id={key_a} />
            </p>
          </Panel>
        )
      })}
    </Collapse>
  )
}

export default Accord
