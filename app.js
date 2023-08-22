const express = require('express');
const app = express();
app.use(express.json());
const data = require('./data.json');
const {Client} = require('./clientsServer');
const clientController = require('./controllers/clientsController');
const routes = require('./routes/index');

app.use(routes);

const port = 3001;
app.listen(port, function (){
    console.log('Server is runing')
});