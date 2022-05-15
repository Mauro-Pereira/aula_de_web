const user = require('../model/User');
const generateToken = require('../Config/tokenGenerate');

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

            res.status(200).json({ msg: 'user successfully created' });
        });
    },

    listAllUser: async (req, res) => {
        const users = await user.find({});
        if (users) {
            return res.status(200).json(users);
        }

    },

    signIn: async (req, res) => {

        const newUser = await user.findOne({ email: req.body.email });

        if (!newUser) {
            res.status(404).json({ msg: "User Not Found" });
        }

        const verifyComparePassword = await newUser.comparePassword(req.body.password, newUser.password);

        if (!verifyComparePassword) {
            res.status(401).json({ msg: 'Password not found' });
        }

        const id = newUser._id;

        res.send({ newUser, token: generateToken({ id: id }) })
    },

    deleteUser: async (req, res) => {
        const id = req.params.id;

        console.log("testando ID: ", id);

        if (!id) { return res.status(404).json("User doest exist") }

        const deletetedUser = await user.findOneAndDelete({ _id: id });

        if (!deletetedUser) { return res.status(404).json("User doest exist") }

        return res.status(200).json(deletetedUser);
    },

    updateUser: async (req, res) => {

        const id = req.params.id;

        const userToBeUpdated = {
            name: req.body.name,
            email: req.body.email,
            Age: req.body.age,
            country: req.body.country,
            language: req.body.language,
            password: req.body.password,
        }

        const newUser = await user.findOneAndUpdate({ _id: id }, userToBeUpdated);

        if (!newUser) {
            return res.status(404).json({ msg: "User not found" });
        }

        return res.status(200).json("Updated with successfully");
    }
}