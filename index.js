const express = require("express")
const app = express()
const port = process.env.PORT || 9000

app.get("/", (request, response) => {
    response.send({ message: "ola mundo!" })
})

app.get("/soma/:num/:num2", (request, response) => {
    const { num, num2 } = request.params
    response.send({ result: parseInt(num) + parseInt(num2) })
})

app.listen(port, () => {
    console.log(`servidor esta rodando em: http://localhost:${port}`)
})
