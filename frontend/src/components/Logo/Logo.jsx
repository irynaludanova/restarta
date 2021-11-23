import React from "react"
import logo from "./../../assets/images/Restart-Ared.svg"

const Logo = (props) => {
  return (
    <>
      <img {...props} src={logo} alt={"Restart-A"} style={{ width: "100%" }} />
    </>
  )
}

export default Logo
