import React from "react"
import restarta from "./../../assets/images/restarta.png"
import "./About.css"
import { Tabs, Row, Col } from "antd"
import { aboutStore } from "../../store/aboutStore"

const { TabPane } = Tabs
const About = () => {
  return (
    <div className="about" id="about">
      <Row>
        <Col>
          <h3>
            о
            <mark style={{ backgroundColor: "#20255c", color: "white" }}>
              нас
            </mark>
          </h3>
          <img src={restarta} alt="Restart-A" className="image" />
        </Col>
      </Row>
      <Row>
        <div className="cardcontainer">
          <Tabs defaultActiveKey="0" type="card" className="container">
            {aboutStore.map((item, index) => {
              return (
                <TabPane tab={item.title} key={index} className="tab">
                  <Col xs={24} sm={24} md={11} lg={11} xl={11}>
                    <span className="desc">{item.text}</span>
                  </Col>
                  <Col md={10} lg={10} xl={10} className="picture">
                    <div>{item.image}</div>
                  </Col>
                </TabPane>
              )
            })}
          </Tabs>
        </div>
      </Row>
    </div>
  )
}

export default About
