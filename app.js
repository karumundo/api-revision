const express = require('express');
const app = express();
app.use(express.json());
const data = require('./data.json');
const {Client} = require('./src/clientsServer');
const routes = require('./src/routes/index');

app.use(routes);

const port = 3001;
app.listen(port, function (){
    console.log('Server is runing')
});