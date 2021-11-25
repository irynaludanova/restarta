import React, { useState } from "react"
import "./Navigation.css"
import { HashLink as Link } from "react-router-hash-link"
import { GiHamburgerMenu } from "react-icons/gi"
import { GrClose } from "react-icons/gr"
import Logo from "../Logo/Logo"
import { routes } from "../../store/routes"
import { Row, Col } from "antd"
import Locale from "./../Locale/Locale"
import { FormattedMessage } from "react-intl"
const Navigation = (props) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <Row justify="space-between" className="nav">
      <Col xs={{ span: 12 }} lg={{ span: 4 }}>
        <Link smooth to="#main">
          <Logo />
        </Link>
      </Col>
      <Col xs={{ span: 3 }} lg={{ span: 4, offset: 12 }}>
        <Locale
          currentLocale={props.currentLocale}
          handleChange={props.handleChange}
        />
      </Col>

      <Col xs={{ span: 9 }} lg={{ span: 4 }}>
        <div className={`panel ${isOpen ? "open" : "close"}`}>
          <ul className="menu">
            {routes.map(({ id, key, path }) => {
              return (
                <Link
                  key={id}
                  className="link"
                  onClick={() => setOpen(!isOpen)}
                  smooth
                  to={path}
                >
                  <FormattedMessage id={key} />
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
