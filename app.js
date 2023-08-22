const express = require('express');
const app = express();
app.use(express.json());
//const routes = express.Router();
const data = require('./data.json');
const {Client} = require('./clientsServer');
const clientController = require('./clientsController')
app.use(express.urlencoded({ extended: true }));


app.get("/clients", clientController.clientsGet);

app.post("/clients", clientController.createClient);

app.get("/clients/:id", function(req, res){
    const {id} = req.params;
    const client = data.find(cli=>cli.id==id);
    res.json(client);
    if (client)return res.status(404).json();
});


app.put("/clients/:id", function(req,res){
    const {id} = req.params;
    const client = data.find(cli=>cli.id==id);
    const {name} = req.body;
    client.name = name;
    res.json(name);

    if (client)return res.status(404).json();
});
app.delete("/clients/:id", function(req,res){
    const {id} = req.params;
    const clientsFiltered = data.filter(cli => cli.id != id);
    res.json(clientsFiltered)
});

const port = 3001;
app.listen(port, function (){
    console.log('Server is runing')
});