import React from "react"

import { Layout, Row, Col } from "antd"
import Main from "../Main/Main"
import About from "../About/About"
import Advantages from "../Advantages/Advantages"
import Questions from "../Questions/Questions"
import AnchorLink from "../../UI/anchor/AnchorLink"
import ContactForm from "../ContactForm/ContactForm"
import Contacts from "../Contacts/Contacts"
import classes from "./MainContent.module.css"
const { Content } = Layout

const MainContent = () => {
  return (
    <Content>
      <Main />
      <Row justify="end">
        <Col className={classes.anchor}>
          <AnchorLink />
        </Col>
      </Row>
      <About />
      <Advantages />
      <Questions />
      <ContactForm />
      <Contacts />
    </Content>
  )
}

export default MainContent
