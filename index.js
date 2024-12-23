const express = require("express")
const cors = require("cors")

const app = new express();
app.use(cors())
app.use(express.json())
app.enable("trust proxy")

app.get("/api/whoami",(req,res)=>{
    const data = {
        ipaddress: req.ip,
        language: req.get("Accept-Language"),
        software: req.headers['user-agent']
    }
    res.send(data);
})

app.listen(3000)