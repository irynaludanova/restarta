const express = require("express")
const path = require("path")
const nodemailer = require("nodemailer")
const dotenv = require("dotenv")

dotenv.config()
const PORT = process.env.PORT || 3001
let initialPath = path.join(__dirname, "..", "frontend/public")
const app = express()

app.use(express.json({ extended: true }))
app.use(express.static(initialPath))
app.use(express.json())

app.use("/", express.static(path.join(__dirname, "frontend", "build")))

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
})

app.get("/", (req, res) => {
  res.sendFile(path.join(initialPath, "index.html"))
})

app.post("/mail", (req, res) => {
  const data = req.body
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: "irynaludanova@gmail.com",
      clientId:
        "519370709756-d39v6mfn3d1cd98soj979s9j6emnd9vf.apps.googleusercontent.com",
      clientSecret: "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",
      refreshToken:
        "1//04J5X1Kf1_jztCgYIARAAGAQSNwF-L9IrNLMcTe7EOZk2CgHkwkPaye9eHTV-iCV-WjWKzyAendE7VNwGJdVGku92dpZyGV-iDj0",
      accessToken:
        "ya29.a0ARrdaM-jrtevkWzx0tJSDey3qwecH9ssA7MSIkDnV9myesbLt99WzGEYPS78K7qnwykjRAyShP3ZITM6jD_W_UhycuS-HIGgzyFG16mgm-OPZICtPi2JXRnNID73wq3WyXUjmLs39JS3m9iROLhv1zQwf5Th",
      expires: 3599,
    },
  })
  const mailOptions = {
    from: `${data.email}`,
    to: "irynaludanova@gmail.com",
    subject: "Message",
    text: `Name:${data.name}, \nEmail:${data.email}, \nMessage:${data.introduction}, \nWebsite:${data.website}`,
  }
  transporter.sendMail(mailOptions, (error, data) => {
    verify()
    console.log(mailOptions)
    if (error) {
      res.json({
        status: "fail",
      })
    } else {
      res.json({
        status: "success",
      })
    }
  })
  transporter.on("token", (token) => {
    console.log("A new access token was generated")
    console.log("User: %s", token.user)
    console.log("Access Token: %s", token.accessToken)
    console.log("Expires: %s", new Date(token.expires))
  })

  let verify = () => {
    transporter.verify(function (error, success) {
      if (error) {
        console.log(`????????????:${error}`)
      } else {
        console.log("Server is ready to take our messages")
      }
    })
  }
})

app.listen(PORT, () => {
  console.log(`server starting on port ${PORT}`)
})
