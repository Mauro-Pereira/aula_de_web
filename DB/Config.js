const mongoose = require('mongoose');
require('dotenv').config();

await mongoose.connect(process.env.MONGODB_URL)
.catch(error => handleError(error));

module.exports = mongoose;

/*
const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
*/