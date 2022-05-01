require('dotenv').config();
const mongoose = require('mongoose');


//console.log("VENDO O QUE ESTÁ DENTRO DO ENV: ", process.env)
mongoose.connect(process.env.DB_URL)
.catch(error => console.log(error));

module.exports = mongoose;

/*
const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
*/