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

app.listen(port, () => console.log(`Listening on port ${port}`));