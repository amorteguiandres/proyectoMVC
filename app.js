const express = require('express');

const app = express();


const homeController = require('./controllers/homeController.js')

app.get('/', homeController,renderHome);


app.listen(3000,()=>{

    console.log('serv funcionando');
});