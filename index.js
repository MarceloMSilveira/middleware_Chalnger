//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming


import express from "express"
import path from "path"
import { fileURLToPath } from "url"
import bodyParser from "body-parser"
let autorization = false

// get directory path
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended:true}))

function checkPwd(userResp){
    if (userResp==="ILoveProgramming"){
        autorization=true;
    } else {
        autorization=false;
    }
    return autorization;
}

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html")
})

app.post("/check",(req,res)=>{
    var userResp = req.body.password;
    if (checkPwd(userResp)) {
        res.sendFile(__dirname+"/public/secret.html");
    } else {
        res.sendFile(__dirname+"/public/index.html")
    }
})

app.listen(port,()=>{
    console.log(`Server running on ${port}`)
})
