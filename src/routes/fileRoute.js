const express = require('express')
const router = express.Router()
const multer = require('multer')
const imageUpload = require('../middleware/upload')

router.post('/uploadfile', imageUpload.single('excel'), (req, res) => {
    res.send(req.file)
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
})

router.post('/uploadBulkfiles', imageUpload.array('excel', 2), (req, res) => {
    res.send(req.files)
 }, (error, req, res, next) => {
     res.status(400).send({ error: error.message })
 })

module.exports = router