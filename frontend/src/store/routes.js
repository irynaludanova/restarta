import { FaLinkedin } from "react-icons/fa"
import { FaViber } from "react-icons/fa"
import { FaTelegram } from "react-icons/fa"
import { SiGmail } from "react-icons/si"
export const routes = [
  { id: 1, path: "#main", exact: true, component: "Главная", key: "main" },
  { id: 2, path: "#about", exact: true, component: "О нас", key: "about" },
  {
    id: 3,
    path: "#advantage",
    exact: true,
    component: "Почему мы",
    key: "advantage",
  },
  {
    id: 4,
    path: "#questions",
    exact: true,
    component: "ЧаВо",
    key: "questions",
  },
  {
    id: 5,
    path: "#form",
    exact: true,
    component: "Оставить заявку",
    key: "form",
  },
  {
    id: 6,
    path: "#contact",
    exact: true,
    component: "Наши контакты",
    key: "contact",
  },
]

export const socialRoutes = [
  {
    id: 1,
    text: "Viber",
    path: "viber://add&number=380980438385",
    component: <FaViber />,
    content: "+38(098)043 83 85",
  },
  {
    id: 2,
    text: "Gmail",
    path: "mailto:ludanova.dev@gmail.com",
    component: <SiGmail />,
    content: "ludanova.dev@gmail.com",
  },
  {
    id: 3,
    text: "Telegram",
    path: "https://t.me/ludanova_irina",
    component: <FaTelegram />,
    content: "",
  },

  {
    id: 4,
    text: "LinkedIn",
    path: "https://www.linkedin.com/in/irina-ludanova",
    component: <FaLinkedin />,
    content: "",
  },
]
