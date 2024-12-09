const express = require("express")
const cors = require("cors")

const app = new express();
app.use(cors())
app.use(express.json())


app.get("/",(req,res)=>{
    const clientIP = req.ip || req.connection.remoteAddress;
    res.send(`Your IP Address is: ${clientIP}`);
})

app.listen(3000)