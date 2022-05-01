const express = require('express');
const app = express();
const route = express.Router();

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/login', (req,res) =>{
    res.render("login");
})


app.listen(3000, (req,res) =>{
    console.log("Listening server on port 3000");
})