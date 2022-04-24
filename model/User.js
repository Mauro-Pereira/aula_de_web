const mongoose = require('../DB/Config');

const UserSchema = mongoose.Schema({

    name: String,
    email: String,
    Age: Number,
    country: String,
    language: String,
    password: String,
    isAdm: Boolean
});

User = mongoose.model('User', UserSchema);

module.exports = User;