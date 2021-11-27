import classes from "./Social.module.css"
import { socialRoutes } from "../../store/routes"
import { FormattedMessage } from "react-intl"
const Social = () => {
  return (
    <div className={classes.social}>
      <p>
        <FormattedMessage id="our_contacts" />
      </p>
      <ul className={classes.items}>
        {socialRoutes.map((item, index) => {
          return (
            <li key={index} className={classes.links}>
              <a href={item.path} key={index}>
                {item.component}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Social
