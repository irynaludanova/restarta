import { Col, Row } from "antd"
import React, { useEffect, useState } from "react"
import classes from "./Timer.module.css"
const Timer = () => {
  const calculateTimeLeft = () => {
    let difference = +new Date(`01/01/2022`) - +new Date()
    let timeLeft = []

    if (difference > 0) {
      timeLeft = [
        {
          id: 1,
          text: "Дней",
          value: Math.floor(difference / (1000 * 60 * 60 * 24)),
        },
        {
          id: 2,
          text: "Часов",
          value: Math.floor((difference / (1000 * 60 * 60)) % 24),
        },
        {
          id: 3,
          text: "Минут",
          value: Math.floor((difference / 1000 / 60) % 60),
        },
        { id: 4, text: "Секунд", value: Math.floor((difference / 1000) % 60) },
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
        <h3>
          До Нового
          <mark style={{ backgroundColor: "#20255c", color: "white" }}>
            2022
          </mark>
          года осталось:
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
