const mongoose = require('mongoose');

await mongoose.connect('mongodb+srv://aulaWeb:mapereira@cluster0.bzv1z.mongodb.net/aulaWeb?retryWrites=true&w=majority')
.catch(error => handleError(error));

module.exports = mongoose;

/*
const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
*/