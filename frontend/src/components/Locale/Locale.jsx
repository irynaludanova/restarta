import React from "react"
import { LOCALES } from "./../../i18n/locales"
const languages = [
  { name: "Украинська", code: LOCALES.UKRANIAN },
  { name: "Русский", code: LOCALES.RUSSIAN },
  { name: "English", code: LOCALES.ENGLISH },
]
const Locale = ({ currentLocale, handleChange }) => {
  return (
    <div className="switcher">
      Languages
      <select onChange={handleChange} value={currentLocale}>
        {languages.map(({ name, code }) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Locale
