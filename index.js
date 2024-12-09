const express = require("express")
const cors = require("cors")

const app = new express();
app.use(cors())
app.use(express.json())


app.get("/",(req,res)=>{
    console.log(req.ip)
    res.send("hello world !")
})

app.listen(3000)