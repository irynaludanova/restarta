import React from "react"
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Col, Row } from "react-bootstrap"
import classes from "./ContactForm.module.css"
const Fieldset = ({ name, label, ...rest }) => (
  <React.Fragment>
    <label htmlFor={name}>{label}</label>
    <Field id={name} name={name} {...rest} />
    <ErrorMessage name={name} />
  </React.Fragment>
)

const ContactForm = () => (
  <Row id="contact">
    <Col className={classes.contact}>
      <div>
        <h1>Sign Up</h1>
        <Formik
          initialValues={{
            email: "",
            color: "",
            animal: "",
            website: "",
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            color: Yup.string().required("Required"),
            website: Yup.string().url("Invalid URL").required("Required"),
            animal: Yup.string().required("Required"),
          })}
          onSubmit={(values) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
            }, 500)
          }}
          render={({ isSubmitting, handleReset }) => (
            <Form>
              <Fieldset
                name="email"
                type="email"
                label="Email"
                placeholder="jane@acme.com"
              />
              <Fieldset name="color" label="Favorite Color" as="select">
                <option value="">Select a Color</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </Fieldset>

              <Fieldset
                name="website"
                type="url"
                label="Website"
                placeholder="https://example.com"
              />

              <Fieldset name="animal" as="select" label="Favorite Animal">
                <option value="">Select an animal</option>
                <option value="tiger">Tiger</option>
                <option value="bear">Bear</option>
                <option value="shark">Shark</option>
              </Fieldset>

              <button
                type="reset"
                className="secondary"
                disabled={isSubmitting}
                onClick={handleReset}
              >
                Reset
              </button>

              <button type="submit">Submit</button>
            </Form>
          )}
        />
      </div>
    </Col>
  </Row>
)
export default ContactForm
