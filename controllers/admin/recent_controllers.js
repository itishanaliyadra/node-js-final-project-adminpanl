const recentmodels = require('../../models/admin/recentModels');
const path = require('path');
const fs = require('fs');
const imagespath = path.join('ulplodesImg')

const recentcreate = async (req, res) => {
    try {
        const { body: { title1, title2 } } = req
        let images = `${imagespath}/${req.file.filename}`;
        const user = await recentmodels.create({ title1, title2, images });
        res.redirect('back')
    } catch (error) {
        console.log(error);
    }
}
const deleRenect = async (req, res) => {
    try {
        const { params: { id } } = req
        console.log(id);
        const delet = await recentmodels.findByIdAndDelete(id);
        fs.unlinkSync(delet.images)
        res.redirect('back')
    } catch (error) {
        console.log(error);
    }
}

const active = async (req, res) => {
    try {
        let { _id } = req.params
        let val = '0';
        const status = await recentmodels.findByIdAndUpdate(_id, {
            status: val
        })
        return res.redirect('back')

    } catch (error) {
        console.log(error);
        return
    }
}
const deactive = async (req, res) => {
    try {
        let { _id } = req.params
        let val = '1';
        const status = await recentmodels.findByIdAndUpdate(_id, {
            status: val
        })
        return res.redirect('back')

    } catch (error) {
        console.log(error);
        return
    }
}
const editrecrnt = async (req, res) => {
    try {
        const { params: { _id } } = req;
        const data = await recentmodels.findById(_id);
        res.render('admin/recentUpadated', {
            data
        })
    } catch (error) {
        console.log(error);
    }
}
const recentupdateds = async (req, res) => {
    try {
        const { params: { _id } } = req;
        if (req.file) {
            let images = `${imagespath}/${req.file.filename}`
            const data = await recentmodels.findByIdAndUpdate(_id, Object.assign({ images }, req.body))
            fs.unlinkSync(data.images)
            return res.redirect('/recretcourses')
        }
        else {
            const { body: { title1, title2 } } = req;
            const data = await recentmodels.findByIdAndUpdate(_id, { title1, title2 });
            if (data) {
                return res.redirect('/recretcourses')
            }
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = { recentcreate, deleRenect, active, deactive, editrecrnt, recentupdateds }