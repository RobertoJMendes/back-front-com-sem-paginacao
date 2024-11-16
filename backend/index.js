import express from 'express'
import cors from 'cors'
import rotas from './routes/usuarios.js'
const app = express()

app.use ((req, res, next) => {
    // Qualquer endereço pode fazer a requisição
    res.header("Access-Control-Allow-Origin", "*")

    // Tipos de métodos que a Api aceita
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE")

    // Permite o envio de dados para Api
    res.header("Access-Control-Allow-Headers",
        //"Origin", 
        //"X-Requrested-With", 
        //"Accept", 
        "Content-Type"
    )

    // Executar o cors
    app.use(cors())
    // Quando não houve erro deve continuar o processamento
    next()
})

app.use(express.json())

app.listen(4000)

app.use("/", rotas)