import React from "react"
import { Anchor } from "antd"
import { routes } from "../../store/routes"
import { FormattedMessage } from "react-intl"
const { Link } = Anchor
const AnchorLink = () => {
  return (
    <Anchor style={{ top: "40%" }}>
      {routes.map(({ id, key, path }) => {
        const title = <FormattedMessage id={key} />
        return <Link key={id} href={path} title={title} />
      })}
    </Anchor>
  )
}

export default AnchorLink
