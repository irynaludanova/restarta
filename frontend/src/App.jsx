import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"
import "./App.css"
import { Layout } from "antd"
import Navigation from "./components/Navigation/Navigation"
import Particles from "./animations/Particles/Particles"
import CustomFooter from "./pages/CustomFooter/CustomFooter"
import Articles from "./pages/articles/Articles"
import MainContent from "./pages/content/MainContent"
import { IntlProvider } from "react-intl"
import { LOCALES } from "./i18n/locales"
import { messages } from "./i18n/messages"
import Locale from "./components/Locale/Locale"
const { Header, Footer } = Layout
function App() {
  const handleChange = ({ target: { value } }) => {
    setCurrentLocale(value)
    localStorage.setItem("locale", value)
  }
  const [currentLocale, setCurrentLocale] = useState(getInitialLocale())

  function getInitialLocale() {
    const savedLocale = localStorage.getItem("locale")
    return savedLocale || LOCALES.RUSSIAN
  }
  return (
    <IntlProvider
      messages={messages[currentLocale]}
      locale={currentLocale}
      defaultLocale={LOCALES.ENGLISH}
    >
      <Layout>
        <Particles bg={true} />
        <Header
          style={{ zIndex: 5, background: "transparent" }}
          currentLocale={currentLocale}
          handleChange={handleChange}
        >
          <Locale currentLocale={currentLocale} handleChange={handleChange} />
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
    </IntlProvider>
  )
}

export default App
