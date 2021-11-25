import classes from "./Social.module.css"
import { socialRoutes } from "../../store/routes"
import { FormattedMessage } from "react-intl"
const Social = () => {
  return (
    <div className={classes.social}>
      <p>
        <FormattedMessage id="our_contacts" />
      </p>
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
