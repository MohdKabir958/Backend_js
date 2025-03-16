import express from "express"
import 'dotenv/config'


const app = express()

const port = 3000

app.get("/",(req,res) => {
    res.send("Hello World")
})

app.get("/home",(req,res) => {
    res.send("welcome to Home")
})

app.get("/youtube",(req,res) => {
    res.send("welcome to youtube")
})



app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})