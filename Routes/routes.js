const express = require('express');
const Router = express.Router();
var jwt = require('jsonwebtoken')
var decodedToken = '';
const mongoose = require('mongoose');
const Usermodel = require('../Models/user')

const verifyToken = require('../Middleware/jwtMD')

const usernews = require('../Models/news')


Router.post('/register', require('../Controllers/RegisterController').post)

Router.post('/login', require('../Controllers/LoginController').post)

Router.get('/user' , verifyToken.Verify , require('../Controllers/userprofilecontroler').userProfile)


Router.get('/mynews' , verifyToken.Verify  , require('../Controllers/Getmynews').getnews);


Router.put('/update/:id', verifyToken.Verify , require('../Controllers/updateController').update)
Router.get('/edit/:id' , verifyToken.Verify , require('../Controllers/editController').edit);


Router.delete('/delete/:id', verifyToken.Verify, require('../Controllers/deleteController').delete);

Router.post('/profile', verifyToken.Verify, require('../Controllers/NewsController').post);

Router.get('/home' , require('../Controllers/homeController').home);

module.exports = Router;