const express = require('express')
const routes = express.Router();
const passport = require('passport');
const { index,register,dashbord, newpassword, forgetpassword, otp, profile, addsilder, post, recert } = require('../../controllers/admin/pages_controllers')


routes.get('/',index)
routes.get('/register', register);
routes.get('/dashbord',passport.checkAuthentication, dashbord)
routes.get('/newpassword', newpassword)
routes.get('/forgetpassword',passport.checkAuthentication, forgetpassword)
routes.get('/otp', otp)
routes.get('/profaile',passport.checkAuthentication, profile)
routes.get('/addsilder',passport.checkAuthentication, addsilder)
routes.get('/recretcourses',passport.checkAuthentication, recert)
routes.get('/postpages',passport.checkAuthentication,  post)

routes.use('/user', require('../admin/user_routes'))

module.exports = routes;