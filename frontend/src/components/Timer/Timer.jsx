import { Col, Row } from "antd"
import React, { useEffect, useState } from "react"
import { FormattedMessage } from "react-intl"
import classes from "./Timer.module.css"
const Timer = () => {
  const calculateTimeLeft = () => {
    let difference = +new Date(`01/01/2022`) - +new Date()
    let timeLeft = []

    if (difference > 0) {
      timeLeft = [
        {
          id: 1,
          text: <FormattedMessage id="timer_d" />,
          value: Math.floor(difference / (1000 * 60 * 60 * 24)),
        },
        {
          id: 2,
          text: <FormattedMessage id="timer_h" />,
          value: Math.floor((difference / (1000 * 60 * 60)) % 24),
        },
        {
          id: 3,
          text: <FormattedMessage id="timer_m" />,
          value: Math.floor((difference / 1000 / 60) % 60),
        },
        {
          id: 4,
          text: <FormattedMessage id="timer_s" />,
          value: Math.floor((difference / 1000) % 60),
        },
      ]
    }

    return timeLeft
  }
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  return (
    <Row justify="center">
      <Col className={classes.container}>
        <h3 style={{ textAlign: "center" }}>
          <FormattedMessage id="timer_desc_1" />
          <mark>2022</mark>
          <FormattedMessage id="timer_desc_2" />
        </h3>
        <div className={classes.timer}>
          {timeLeft.map((item, index) => {
            return (
              <div className={classes.items}>
                <span key={item.id + 5}>{item.text}</span>
                <div className={classes.item}>
                  <span key={index}>{item.value}</span>
                </div>
              </div>
            )
          })}
        </div>
      </Col>
    </Row>
  )
}

export default Timer
