const user = require('../model/User');


/*
novoUsuario = new user({
    name: 'Mauro Pereira',
    email: 'mauropereira2@email.com',
    Age: 25,
    country: 'Brasil',
    language: 'Português',
    password: "senha12345",
    isAdm: false
})

novoUsuario.save(function(err) {
    if (err) throw err;
});

user.findOne({ email: 'mauropereira@email.com' }, function(err, user) {
    if (err) throw err;
     
    // test a matching password
    if(!user){
        throw new CustomError.UserNotFound();
    }else{
    user.comparePassword('Password123', function(err, isMatch) {
        if (err) throw err;
        console.log('Password123:', isMatch); // -&gt; Password123: true
    });
}
  
/*
    // test a failing password
    user.comparePassword('123Password', function(err, isMatch) {
        if (err) throw err;
        console.log('123Password:', isMatch); // -&gt; 123Password: false
    });
});
*/

module.exports = {
    createUser: async (req, res) => {

        const email = req.body.email;
        const password = req.body.password;

        if (!email && !password) {

            return res.status(403).json({ msg: 'please enter an email and a password' });
        }

        const verifyUser = await user.findOne({ email: email });

        if (verifyUser) {
            return res.status(401).json({ msg: 'User already exists' });
        }

        let novoUsuario = new user({
            name: req.body.name,
            email: req.body.email,
            Age: req.body.age,
            country: req.body.country,
            language: req.body.language,
            password: req.body.password,
            isAdm: req.body.isAdm
        });

        novoUsuario.save(function (err) {
            if (err) throw err;
            
            res.status(200).json({msg:'user successfully created'});
        });
    },

    listAllUser: async (req, res) => {

        const users = user.find({});
        if (users) {
            return res.status(200).json(user);
        }
    },
}