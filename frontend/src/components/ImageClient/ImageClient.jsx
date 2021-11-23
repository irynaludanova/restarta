import React from "react"
import client1 from "./../../assets/images/client1.webp"
import client2 from "./../../assets/images/client2.webp"
import client3 from "./../../assets/images/client3.webp"
import classes from "./ImageClient.module.css"
const ImageClient = () => {
  return (
    <div className={classes.clients}>
      <img src={client1} alt="photo1" className={classes.client} />
      <img src={client2} alt="photo2" className={classes.client} />
      <img src={client3} alt="photo3" className={classes.client} />
    </div>
  )
}

export default ImageClient
