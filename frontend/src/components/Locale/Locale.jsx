import React from "react"
import { LOCALES } from "./../../i18n/locales"
import classes from "./Locale.module.css"
const languages = [
  { name: "UA", code: LOCALES.UKRANIAN },
  { name: "RU", code: LOCALES.RUSSIAN },
  { name: "EN", code: LOCALES.ENGLISH },
]
const Locale = ({ currentLocale, handleChange }) => {
  return (
    <div className={classes.switcher}>
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
