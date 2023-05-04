
const silderModels = require('../../models/admin/silderModels');
const path = require('path');
const fs = require('fs');
const imagespath = path.join('ulplodesImg')

const sildercreadt = async (req, res) => {
    try {
        const { body: { title1, title2 } } = req
        let images = `${imagespath}/${req.file.filename}`;
        const user = await silderModels.create({ title1, title2, images });
        res.redirect('back')
    } catch (error) {
        console.log(error);
    }
}
const deleteData = async (req, res) => {
    try {
        const { params: { id } } = req
        console.log(id);
        const dele = await silderModels.findByIdAndDelete(id);
        fs.unlinkSync(dele.images)
        res.redirect('back')
    } catch (error) {
        console.log(error); 
    }
}

const active = async (req, res) => {
    try {
        let { _id } = req.params
        let val = '0';
        const status = await silderModels.findByIdAndUpdate(_id, {
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
        const status = await silderModels.findByIdAndUpdate(_id, {
            status: val
        })
        return res.redirect('back')

    } catch (error) {
        console.log(error);
        return
    }
}
const EditData = async (req, res) => {
    try {
        const { params: { _id } } = req;
        const data = await silderModels.findById(_id);
        res.render('admin/updated', {
            data
        })
    } catch (error) {
        console.log(error);
    }
}
const updateddata = async (req, res) => {
    try {
        const { params: { _id } } = req;
        let user = req.body
        if (req.file) {
            let images =`${imagespath}/${req.file.filename}`
            const data = await silderModels.findByIdAndUpdate(_id, Object.assign({images}, req.body))
            fs.unlinkSync(data.images)
            res.redirect('/addsilder')
        }
        else {
            const data = await silderModels.findByIdAndUpdate(_id, user)
            res.redirect('/addsilder')
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = { sildercreadt, deleteData, active, deactive, EditData, updateddata }
