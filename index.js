const express = require('express');
const app = express();
const route = express.Router();

app.set('view engine', 'ejs');
app.set('views', './views');

//mongodb+srv://aulaWeb:<password>@cluster0.bzv1z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
app.get('/login', (req,res) =>{
    res.render("login");
})


app.listen(3000, (req,res) =>{
    console.log("Listening server on port 3000");
})