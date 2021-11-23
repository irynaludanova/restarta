import React, { useState } from "react"
import "./Navigation.css"
import { HashLink as Link } from "react-router-hash-link"
import { GiHamburgerMenu } from "react-icons/gi"
import { GrClose } from "react-icons/gr"
import Logo from "../Logo/Logo"
import { routes } from "../../store/routes"
import { Row, Col } from "antd"

const Navigation = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <Row justify="space-around" className="nav">
      <Col xs={6} sm={6} md={4} lg={4} xl={4}>
        <Link smooth to="#main">
          <Logo />
        </Link>
      </Col>
      <Col span={17}>
        <div className={`panel ${isOpen ? "open" : "close"}`}>
          <ul className="menu">
            {routes.map((item, index) => {
              return (
                <Link
                  key={index}
                  className="link"
                  onClick={() => setOpen(!isOpen)}
                  smooth
                  to={item.path}
                >
                  {item.component}
                </Link>
              )
            })}
          </ul>
        </div>

        <button onClick={() => setOpen(!isOpen)} className="btn">
          {!isOpen ? <GiHamburgerMenu /> : <GrClose />}
        </button>
      </Col>
    </Row>
  )
}

export default Navigation
