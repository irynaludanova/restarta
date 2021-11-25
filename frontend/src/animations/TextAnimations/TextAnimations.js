import React from "react"
import "./TextAnimations.css"
import { FormattedMessage } from "react-intl"
import { offerText } from "./../../store/offerText"

export default function TextAnimations({ children }) {
  const text = children

  const array = text.split("")

  return (
    <div className="animate one">
      {offerText.map(({ id, key }) => {
        return (
          <span key={id}>
            <FormattedMessage id={key} />
          </span>
        )
      })}
    </div>
  )
}
