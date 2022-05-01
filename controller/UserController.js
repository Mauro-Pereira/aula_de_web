//const mongoose = require('../DB/Config');
const user = require('../model/User');

novoUsuario = new user({
    name: 'Mauro',
    email: 'mauropereira@email.com',
    Age: 25,
    country: 'Brasil',
    language: 'Português',
    password: "senha12345",
    isAdm: false
})

novoUsuario.save(function(err) {
    if (err) throw err;
});

novoUsuario.findOne({ email: 'mauropereira@email.com' }, function(err, user) {
    if (err) throw err;
     
    // test a matching password
    user.comparePassword('Password123', function(err, isMatch) {
        if (err) throw err;
        console.log('Password123:', isMatch); // -&gt; Password123: true
    });
     
    // test a failing password
    user.comparePassword('123Password', function(err, isMatch) {
        if (err) throw err;
        console.log('123Password:', isMatch); // -&gt; 123Password: false
    });
});