import { React, useState } from "react"
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Col, Row } from "react-bootstrap"
import classes from "./ContactForm.module.css"

const ContactForm = () => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [website, setWebsite] = useState("")

  const SignUpSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
    firstName: Yup.string()
      .min(2, "Must be longer than 2 characters")
      .max(20, "Nice try, nobody has a first name that long")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Must be longer than 2 characters")
      .max(20, "Nice try, nobody has a last name that long")
      .required("Required"),
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && email) {
      fetch("/mail", {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify({
          name,
          email,
          message,
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
  const onChangeMessage = (e) => {
    setMessage(e.target.value)
  }
  const onChangeWebsite = (e) => {
    setWebsite(e.target.value)
  }
  return (
    <Row id="contact">
      <Col className={classes.contact}>
        <div>
          <h1>Sign Up</h1>
          <Formik
            initialValues={{
              email: "",
              website: "",
              message: "",
            }}
            validationSchema={SignUpSchema}
            onSubmit={(values) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2))
              }, 500)
            }}
            render={({ isSubmitting, handleReset }) => (
              <Form onSubmit={handleSubmit}>
                <Field
                  name="firstName"
                  type="text"
                  label="Имя"
                  value={name}
                  placeholder="Иван"
                  required
                  onChange={onChangeName}
                />

                <Field
                  name="email"
                  type="email"
                  label="Email"
                  value={email}
                  placeholder="example@gmail.com"
                  required
                  onChange={onChangeEmail}
                />

                <Field
                  name="website"
                  type="url"
                  value={website}
                  label="Website"
                  placeholder="https://example.com"
                  onChange={onChangeWebsite}
                />
                <textarea
                  placeholder="Сообщение"
                  name="message"
                  value={message}
                  onChange={onChangeMessage}
                ></textarea>

                <button type="submit" onClick={handleSubmit}>
                  Submit
                </button>
              </Form>
            )}
          />
        </div>
      </Col>
    </Row>
  )
}
export default ContactForm
