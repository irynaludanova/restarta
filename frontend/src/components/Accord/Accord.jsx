import React from "react"
import { questionsStore } from "../../store/questionsStore"
import "./Accord.css"
import { Collapse } from "antd"
import { CaretRightOutlined } from "@ant-design/icons"
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
      {questionsStore.map((item, index) => {
        return (
          <Panel
            header={item.questionText}
            key={index}
            className="site-collapse-custom-panel"
          >
            <p> {item.answerText}</p>
          </Panel>
        )
      })}
    </Collapse>
  )
}

export default Accord
