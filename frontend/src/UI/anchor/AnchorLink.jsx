import React from "react"
import { Anchor } from "antd"
import { routes } from "../../store/routes"

const { Link } = Anchor
const AnchorLink = () => {
  return (
    <Anchor style={{ top: "40%" }}>
      {routes.map((item, index) => {
        return <Link key={index} href={item.path} title={item.component} />
      })}
    </Anchor>
  )
}

export default AnchorLink
