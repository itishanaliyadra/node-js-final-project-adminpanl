const registermodels = require('../../models/admin/ragistermodels');
const silderModels = require('../../models/admin/silderModels')
const recentmodels = require('../../models/admin/recentModels')
const postmodel = require('../../models/admin/postmodels');
const bcrypt = require('bcrypt');

const index = (req, res) => {
    if (res.locals.findUser) {
        return res.redirect('/dashbord')
    }
    res.render('admin/index')
}

const register = (req, res) => {
    res.render('admin/register')
}
const dashbord = (req, res) => {
    res.render('admin/dashbord')
}
const newpassword = (req, res) => {
    if (req.cookies.otpData) {
        return res.render('admin/newpassword')
    }
    res.redirect('/otp')
}
const otp = (req, res) => {
    if (req.cookies.obj) {
        return res.render('admin/otp')
    }
    return res.redirect('/forgetpassword')
}
const forgetpassword = (req, res) => {
    res.render('admin/forgetpassword')
}
const profile = async (req, res) => {
    res.render('admin/profaile')
}
const addsilder = async (req, res) => {
    try {
        const data = await silderModels.find({});
        res.render('admin/addsilder',{data})
    } catch (error) {
        console.log(error); 
    }
}
const recert = async (req, res) => {
    try {
        const renecnt = await recentmodels.find({});
        res.render('admin/recretcourses',{renecnt})
    } catch (error) {
        console.log(error);
    } 
}
const post = async (req, res) => {
  try {
    const data = await postmodel.find({});
    res.render('admin/postdata',{data})
  } catch (error) {
    console.log(error);
  }
}
 


module.exports = {
    index, register, dashbord, newpassword, forgetpassword, otp, profile, addsilder, recert,post
}
