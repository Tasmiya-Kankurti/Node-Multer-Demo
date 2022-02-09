const express = require('express')
const router = express.Router()
const multer = require('multer')
const imageUpload = require('../middleware/upload')
const readXlsxFile = require("read-excel-file/node");

router.post('/uploadBulkImage', imageUpload.array('excel', 2), (req, res) => {
    res.send(req.files)
 }, (error, req, res, next) => {
     res.status(400).send({ error: error.message })
 })

// For Single image upload
router.post('/uploadfile', imageUpload.single('excel'), (req, res) => {
    res.send(req.file)
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
})

module.exports = router