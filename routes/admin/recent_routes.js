const routes = require('express').Router();
const passport = require('passport');
const ImagesUplodes = require('../../middelwear/multer');
const { recentcreate, deleRenect, active, deactive, editrecrnt, recentupdateds } = require('../../controllers/admin/recent_controllers')

routes.post('/recentcreate', ImagesUplodes, recentcreate)
routes.get('/delerecrent/:id', deleRenect)
routes.get('/aactive/:_id', active)
routes.get('/ddeactive/:_id', deactive)
routes.get('/editrecrnt/:_id', editrecrnt)
routes.post('/recentupdatedss/:_id',ImagesUplodes, recentupdateds)

const { postcreateData, postdelete, actives, deactives, postedit, postupdated }= require('../../controllers/admin/postcontrollers');
routes.post('/postcreate',ImagesUplodes, postcreateData)
routes.get('/deletepost/:id', postdelete)
routes.get('/postactive/:id', actives)
routes.get('/postdeactive/:id', deactives)
routes.get('/editpost/:id',postedit)
routes.post('/updatedpost/:id', ImagesUplodes, postupdated)

module.exports = routes