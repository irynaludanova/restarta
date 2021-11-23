import classes from "./Social.module.css"
import { socialRoutes } from "../../store/routes"

const Social = () => {
  return (
    <div className={classes.social}>
      <p>Наши контакты:</p>
      <div className={classes.items}>
        {socialRoutes.map((item, index) => {
          return (
            <a href={item.path} key={index}>
              {item.component}
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Social
