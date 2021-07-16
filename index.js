const express = require("express")
const app = express()
const port = 9000

app.get("/", (request, response) => {
    response.send({ message: "ola mundo!" })
})

app.get("/soma/:num/:num2", (request, response) => {
    response.send({ message: "novo endpoint" })
})

app.listen(port, () => {
    console.log(`servidor esta rodando em: http://localhost:${port}`)
})
