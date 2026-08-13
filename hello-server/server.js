import app from "./app.js"
import dotenv from "dotenv";

dotenv.config()

app.get('/', (req, res) => {
  res.send({"status":"ok", "service":"lista-01"})     
})

app.get('/health', (req, res) => {
    res.send({status:"ok"})
})

app.get('/soma/:a/:b',(req, res) => {
    res.send("soma = " + (Number(req.params.a) + Number(req.params.b)))
})

app.get('/echo', (req, res) => {
    res.send(req.query)
})

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`)
})