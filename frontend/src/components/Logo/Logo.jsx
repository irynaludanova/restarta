import React from "react"
import logo from "./../../assets/images/Restart-Ared.svg"
import classes from "./Logo.module.css"
const Logo = (props) => {
  return (
    <>
      <img {...props} src={logo} alt={"Restart-A"} className={classes.logo} />
    </>
  )
}

export default Logo
