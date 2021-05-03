const express = require("express")
const http = require("http")

const { json, urlencoded } = express
const port = process.env.PORT || 4000
const app = express()

app.use(json())
app.use(urlencoded({ extended: false }))
app.set("port", port)

app.get("/api/", (req, res) => {
	res.json({ success: true, message: "Hello World" })
})

const server = http.createServer(app)
server.listen(port)
