import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"
import "./App.css"
import { Layout } from "antd"
import Navigation from "./components/Navigation/Navigation"
import Particles from "./animations/Particles/Particles"
import CustomFooter from "./pages/CustomFooter/CustomFooter"
import Articles from "./pages/articles/Articles"
import MainContent from "./pages/content/MainContent"
const { Header, Footer } = Layout
function App() {
  return (
    <Layout>
      <Particles bg={true} />
      <Header style={{ zIndex: 5, background: "transparent" }}>
        <Navigation />
      </Header>
      <Routes>
        <Route path="/" element={<MainContent />}></Route>
        <Route path="/articles" element={<Articles />}></Route>
      </Routes>
      <Footer>
        <CustomFooter />
      </Footer>
    </Layout>
  )
}

export default App
