const postmodel = require('../../models/admin/postmodels');
const path = require('path');
const fs = require('fs');
const imagespath = path.join('ulplodesImg')

const postcreateData = async (req, res) => {
    try {
        let images = `${imagespath}/${req.file.filename}`;
        const { body: { title, aother, data, category, des } } = req
        const user = await postmodel.create({ title, aother, data, category, des, images });
        res.redirect('back')
    } catch (error) {
        console.log(error);
    }
}
const postdelete = async (req, res) => {
    try {
        const { params: { id } } = req
        const deletes = await postmodel.findByIdAndDelete(id);
        fs.unlinkSync(deletes.images)
        res.redirect('back')
    } catch (error) {
        console.log(error);
    }
}


const actives = async (req, res) => {
    try {
        let { id } = req.params;
        let val = '0';
        const status = await postmodel.findByIdAndUpdate(id, {
            status: val
        })
        return res.redirect('back')

    } catch (error) {
        console.log(error);
        return
    }
}
const deactives = async (req, res) => {
    try {
        let { id } = req.params;
        let val = '1';
        const status = await postmodel.findByIdAndUpdate(id, {
            status: val
        })
        return res.redirect('back')

    } catch (error) {
        console.log(error);
        return
    }
}
const postedit = async (req, res) => {
    try {
        const { params: { id } } = req;
        console.log(id);
        const data = await postmodel.findById(id);
        res.render('admin/postupdated', {
            data
        })
    } catch (error) {
        console.log(error);
    }
}
const postupdated = async (req, res) => {
    try {
        const { params: { id } } = req;
        if (req.file) {
            let images = `${imagespath}/${req.file.filename}`
            const data = await postmodel.findByIdAndUpdate(id, Object.assign({ images }, req.body))
            fs.unlinkSync(data.images)
            return res.redirect('/postpages')
        }
        else {
            const { body: { title, aother, data, category, des } } = req
            const post = await postmodel.findByIdAndUpdate(id, { title, aother, data, category, des });
            if (post) {
                return res.redirect('/postpages')
            }
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = { postcreateData, postdelete, actives, deactives, postedit, postupdated }