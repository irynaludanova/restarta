import { BackTop } from "antd"
import { ImArrowUp } from "react-icons/im"
import classes from "./BackToTop.module.css"
const BackToTop = () => {
  return (
    <BackTop className={classes.back}>
      <div className={classes.style}>
        <ImArrowUp />
      </div>
    </BackTop>
  )
}

export default BackToTop
