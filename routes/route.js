const express = require('express');
const route = express.Router();
const db = require('../DB/Config');

const userController = require('../controller/UserController');

route.get('/',userController.listAllUser);
route.post('/saveUser',userController.createUser);
route.post('/signInUser', userController.signIn);
route.delete('/deleteUser/:id',userController.deleteUser);
route.put('/updateUser/:id',userController.updateUser);


module.exports = route;