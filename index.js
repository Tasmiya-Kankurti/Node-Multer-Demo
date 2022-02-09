const express = require('express')
const bodyParser = require('body-parser')
const fileRouter = require('./src/routes/fileRoute')
const app = express()

const port = process.env.PORT || 3000

app.get('/', (req, res) => { 
    res.send('test')
})

app.use('/upload',fileRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port);
})