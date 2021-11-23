import { React, useState } from "react"
import { Form, Input, Row, Col } from "antd"
import Button from "../../UI/button/Button"
import classes from "./CustomForm.module.css"
const CustomForm = () => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [introduction, setIntroduction] = useState("")
  const [website, setWebsite] = useState("")

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  }
  /* eslint-disable no-template-curly-in-string */

  const validateMessages = {
    required: "Заполните поле ${label} ",
    types: {
      email: "Неверный формат ${label} ",
    },
  }
  /* eslint-enable no-template-curly-in-string */

  const onFinish = (e) => {
    console.log(name, email)
    e.preventDefault()
    if (name && email) {
      fetch("/mail", {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify({
          name,
          email,
          introduction,
          website,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data)
        })
    }
  }
  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }
  const onChangeName = (e) => {
    setName(e.target.value)
  }
  const onChangeIntroduction = (e) => {
    setIntroduction(e.target.value)
  }
  const onChangeWebsite = (e) => {
    setWebsite(e.target.value)
  }
  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
      className={classes.form}
    >
      <Form.Item
        name={["user", "name"]}
        label="Имя"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input
          value={name}
          onChange={onChangeName}
          placeholder="Иван"
          className={classes.input}
        />
      </Form.Item>
      <Form.Item
        name={["user", "email"]}
        label="Email"
        rules={[
          {
            type: "email",
          },
        ]}
      >
        <Input
          value={email}
          placeholder="example@gmail.com"
          onChange={onChangeEmail}
          className={classes.input}
        />
      </Form.Item>

      <Form.Item name={["user", "website"]} label="Сайт">
        <Input
          value={website}
          placeholder="https://example.com"
          onChange={onChangeWebsite}
          className={classes.input}
        />
      </Form.Item>
      <Form.Item name={["user", "introduction"]} label="Сообщение">
        <Input.TextArea
          value={introduction}
          onChange={onChangeIntroduction}
          className={classes.input}
        />
      </Form.Item>
      <Row justify="center">
        <Col span={24}>
          <Form.Item>
            <Button htmltype="submit" onClick={onFinish}>
              Отправить
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}
export default CustomForm
