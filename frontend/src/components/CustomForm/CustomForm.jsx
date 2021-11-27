import { React, useState } from "react"
import { Form, Input, Row, Col } from "antd"
import Button from "../../UI/button/Button"
import "./CustomForm.css"

import { FormattedMessage } from "react-intl"
const CustomForm = () => {
  const [form] = Form.useForm()
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [introduction, setIntroduction] = useState("")
  const [website, setWebsite] = useState("")
  const [buttonText, setButtonText] = useState("start")
  const [sent, setSent] = useState(false)

  /* eslint-disable no-template-curly-in-string */

  const validateMessages = {
    required: "Заполните поле ${label} ",
    types: {
      email: "Неверный формат ${label} ",
    },
  }

  const onReset = () => {
    form.resetFields()
  }

  const onFinish = async (e) => {
    if (!name || !email) {
      setSent(false)
      onFinishFailed()
    } else {
      try {
        const response = await fetch("/mail", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ email, introduction, name, website }),
        })
        const resData = await response.json()

        if (resData.status === "success") {
          setButtonText("finish")
          setSent(true)
          onReset()
        } else if (resData.status === "fail") {
          alert("Message failed to send.")
        }
      } catch (err) {
        onFinishFailed()
      }
    }
  }
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo)
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
  const nameLabel = <FormattedMessage id="name_key" />
  const messageLabel = <FormattedMessage id="message_label" />
  const siteLabel = <FormattedMessage id="site_key" />

  return (
    <Form
      name="nest-messages"
      form={form}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      validateMessages={validateMessages}
      className="form"
    >
      <Form.Item
        name={["user", "name"]}
        label={nameLabel}
        rules={[
          {
            required: true,
            message: { nameLabel },
          },
        ]}
      >
        <Input
          value={name}
          onChange={onChangeName}
          className="input"
          required
        />
      </Form.Item>
      <Form.Item
        name={["user", "email"]}
        label="Email"
        rules={[
          {
            required: true,
            type: "email",
          },
        ]}
      >
        <Input
          value={email}
          placeholder="example@gmail.com"
          onChange={onChangeEmail}
          className="input"
          required
        />
      </Form.Item>
      <Form.Item name="url" label={siteLabel}>
        <Input
          value={website}
          placeholder="https://example.com"
          onChange={onChangeWebsite}
          className="input"
        />
      </Form.Item>
      <Form.Item name={["user", "introduction"]} label={messageLabel}>
        <Input.TextArea
          value={introduction}
          onChange={onChangeIntroduction}
          className="input"
        />
      </Form.Item>
      <Row justify="center">
        <Col span={24}>
          <Form.Item>
            <span className={sent ? "msg msgAppear" : "msg"}>
              <FormattedMessage id="formMessage" />
            </span>

            <Button htmltype="submit">
              <FormattedMessage id={buttonText} />
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}
export default CustomForm
