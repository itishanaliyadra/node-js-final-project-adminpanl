const routes = require('express').Router();
const { home, contact, contactdata } = require('../../controllers/user/pages_controllers')

routes.get('/home', home)
routes.get('/contactpages', contact)
routes.post('/contactcreate', contactdata)
module.exports = routes;