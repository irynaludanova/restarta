import { FaLinkedin } from "react-icons/fa"
import { FaViber } from "react-icons/fa"
import { FaTelegram } from "react-icons/fa"
import { SiGmail } from "react-icons/si"
export const routes = [
  { id: 1, path: "#about", exact: true, component: "О нас" },
  { id: 2, path: "#advantage", exact: true, component: "Почему мы" },
  { id: 3, path: "#questions", exact: true, component: "ЧаВо" },
  { id: 4, path: "#finish", exact: true, component: "Контакты" },
]

export const socialRoutes = [
  { id: 1, path: "https://t.me/ludanova_irina", component: <FaTelegram /> },
  { id: 2, path: "viber://add&number=380980438385", component: <FaViber /> },
  { id: 3, path: "mailto:ludanova.dev@gmail.com", component: <SiGmail /> },
  {
    id: 4,
    path: "https://www.linkedin.com/in/irina-ludanova",
    component: <FaLinkedin />,
  },
]
