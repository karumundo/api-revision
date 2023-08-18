const express = require('express');
const app = express();
app.use(express.json());
const data = require('./data.json');

app.get("/clients", function(req,res){
    res.json(data)
});

app.get("/clients/:id", function(req, res){
    const {id} = req.params;
    const client = data.find(cli=>cli.id==id);
    res.json(client);
    if (client)return res.status(404).json();
})
app.post("/clients", function(req,res){
    const{name, email} = req.body;
    res.json({name, email})
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