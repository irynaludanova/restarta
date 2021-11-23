import React from "react"
import "./TextAnimations.css"
export default function TextAnimations({ children }) {
  const text = children

  const array = text.split("")

  return (
    <div className="animate one">
      {array.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </div>
  )
}
