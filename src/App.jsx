import React from "react"
import "./App.css"
import { Container, Col } from "react-bootstrap"
import Navigation from "./components/Navigation/Navigation"
import Particles from "./animations/Particles/Particles"
import Main from "./pages/Main/Main"
import About from "./pages/About/About"
import "bootstrap/dist/css/bootstrap.min.css"
import Advantages from "./pages/Advantages/Advantages"
import Questions from "./pages/Questions/Questions"
import Finish from "./pages/Finish/Finish"

function App() {
  return (
    <Container fluid className="app">
      <Col>
        <Particles bg={true} />
        <Navigation />
        <Main />
        <About />
        <Advantages />
        <Questions />
        <Finish />
      </Col>
    </Container>
  )
}

export default App
