const sildermodels = require('../../models/admin/silderModels')
const recentmodels = require('../../models/admin/recentModels')
const postmodels = require('../../models/admin/postmodels')
const contactModels = require('../../models/admin/contact')
const home = async (req, res) => {
    try {
        const data = await sildermodels.find({});
        const user = await recentmodels.find({}).sort({ _id: -1 });
        const postdata = await postmodels.find({}).sort({ _id: -1 });
        res.render('user/home', { data, user, postdata })
    } catch (error) {
        console.log(error);
    }
}
const contact = async (req, res) => {
    res.render('user/contact')
}
const contactdata = async (req, res) => {
    try {
        const {body:{name,email,subject,message}}= req
        const data = await contactModels.create({name,email,subject,message});
        res.redirect('back')
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    home, contact, contactdata
}