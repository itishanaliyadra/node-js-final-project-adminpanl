const routes = require('express').Router();
const passport = require('passport');
const ImagesUplodes = require('../../middelwear/multer');

const { registerData, loginData, logout, sendEmail, otpData, newpassworData, profailepotoData } = require('../../controllers/admin/users_controllers')

routes.post('/register_data', registerData)
routes.post('/loginData', passport.authenticate('local', ({ failureRedirect: '/' })), loginData)
routes.get('/logout', logout)
routes.post('/forgetpasswordData', sendEmail)
routes.post('/otpData', otpData)
routes.post('/forGetPadssswordData', newpassworData)
routes.post('/profailepotoData', ImagesUplodes, profailepotoData)



const { sildercreadt, deleteData, active, deactive, EditData, updateddata } = require('../../controllers/admin/silder_controllers')
routes.post('/sildercreadt', ImagesUplodes, sildercreadt)
routes.get('/deleteData/:id', deleteData)
routes.get('/active/:_id', active)
routes.get('/deactive/:_id', deactive)
routes.get('/EditData/:_id', EditData)
routes.post('/updateslider/:_id', ImagesUplodes, updateddata)



routes.use('/', require('../admin/recent_routes'));
module.exports = routes