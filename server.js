const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const userController = require('./nodejsapp/controller/userController.js');
const tokenController = require('./nodejsapp/controller/earnTokensController.js');

mongoose.connect('mongodb://localhost:27017/NFT_Gallery', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const app = express()

app.use('/', express.static(path.join(__dirname, 'static')))
app.use(bodyParser.json())

app.use('/users', userController);
app.use('/token', tokenController);

app.listen(9999, () =>{
    console.log('Server up at 9999')
})