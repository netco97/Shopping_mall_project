const fs = require('fs');
const express = require('express');
const mysql = require('mysql');
const cors = require("cors");

const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);

const db = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    database: conf.database
  });

app.post('/register', (req, res) => {
    const email = req.body.email
    const password = req.body.password

    db.query("INSERT INTO users (email, password) VALUES (?,?)",
    [email, password],
    (err, result)=>{
        console.log(err);
    })
})

app.post('/login', (req,res)=>{
    const email = req.body.email
    const password = req.body.password

    db.query(
        "SELECT * FROM users WHERE email = ? AND password = ?",
    [email, password],
    (err, result)=>{
        if(err){
            res.send({err: err});
        }
        else{
            if(result.length>0){
                if(result)
                res.send({success: true});
            }
            else{
                res.send({message: "잘못된 아이디 또는 비밀번호 입니다. "});
            }
        }
})
})

app.listen(port, () => console.log(`Listening on port ${port}`));