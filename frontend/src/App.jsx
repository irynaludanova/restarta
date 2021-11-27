import React, { Suspense, useState } from "react"
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
import Loader from "./components/Loader/Loader"

const { Header, Footer } = Layout
function App() {
  const [currentLocale, setCurrentLocale] = useState(getInitialLocale())

  const handleChange = (e) => {
    e.preventDefault()
    setCurrentLocale(e.target.value)
    localStorage.setItem("locale", e.target.value)
  }

  function getInitialLocale() {
    const savedLocale = localStorage.getItem("locale")
    return savedLocale || LOCALES.RUSSIAN
  }
  return (
    <IntlProvider
      messages={messages[currentLocale]}
      locale={currentLocale}
      defaultLocale={LOCALES.RUSSIAN}
    >
      <Suspense fallback={<Loader />}>
        <Layout>
          <Particles bg={true} />
          <Header style={{ zIndex: 5, background: "transparent" }}>
            <Navigation
              currentLocale={currentLocale}
              handleChange={handleChange}
            />
          </Header>

          <Routes>
            <Route path="/" element={<MainContent />}></Route>
            <Route path="/articles" element={<Articles />}></Route>
          </Routes>
          <Footer>
            <CustomFooter />
          </Footer>
        </Layout>
      </Suspense>
    </IntlProvider>
  )
}

export default App
