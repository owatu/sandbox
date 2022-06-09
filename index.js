import express from "express"

const PORT = 3000

const app = express()

app.use((req, res, next) => {
  const { url } = req
  const { remoteAddress, remotePort, remoteFamily, localAddress, localPort } = req.socket
  console.log(`${remoteAddress} : ${remotePort} (${remoteFamily}) -> ${remoteAddress} : ${remotePort} + ${url}`)
  next()
})

app.get("/", (req, res) => {
  const name = req.query.name || "World"
  res.send(`Hello, ${name}!`)
})

app.listen(PORT, () => {
  console.log(`started http://localhost:${PORT}`)
})
