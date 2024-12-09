const express = require("express")
const cors = require("cors")

const app = new express();
app.use(cors())
app.use(express.json())


app.get("/",(req,res)=>{
    res.send(req.connection.remoteAddress)
})

app.listen(3000)