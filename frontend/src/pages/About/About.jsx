import React from "react"
import restarta from "./../../assets/images/restarta.png"
import "./About.css"
import { Tabs, Row, Col } from "antd"
import { aboutStore } from "../../store/aboutStore"
import { FormattedMessage } from "react-intl"

const { TabPane } = Tabs

const About = () => {
  return (
    <div className="about" id="about">
      <Row>
        <Col>
          <h2 className="black">
            <FormattedMessage id="about_1" />
            <mark>
              <FormattedMessage id="about_2" />
            </mark>
          </h2>
          <img src={restarta} alt="Restart-A" className="image" />
        </Col>
      </Row>
      <Row>
        <div className="cardcontainer">
          <Tabs defaultActiveKey="0" type="card" className="container">
            {aboutStore.map(({ key, key_1, id, image }) => {
              const title = <FormattedMessage id={key_1} />
              return (
                <TabPane tab={title} key={id} className="tab">
                  <Col xs={24} sm={24} md={11} lg={11} xl={11}>
                    <span className="desc">
                      <FormattedMessage id={key} />
                    </span>
                  </Col>
                  <Col md={10} lg={10} xl={10} className="picture">
                    <div>{image}</div>
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
