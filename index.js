const express = require('express');
const cors = require('cors');
const app = express();
const route = require('./routes/route');
const bodyParse = require('body-parser');

app.use(bodyParse.urlencoded({extended:false}));
app.use(bodyParse.json());

app.use(cors());

app.use('/', route);
app.use('/saveUser', route);
app.use('/signInUser', route);
app.use('/deleteUser/:id',route);
app.use('/updateUser/:id', route);


app.listen(3000, (req,res) =>{
    console.log("Listening server on port 3000");
})