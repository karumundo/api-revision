const express = require('express');
const app = express();
app.use(express.json());
const data = require('../data.json');
const Client = require('../clientsServer');


    function createClient(req, res) {
        try {
            const {
                name,
                email,
            } = req.body;

            const newClient =  new Client({
                name,
                email,
                //data_status: 1
            });
            console.log(newClient.id)
            return res.status(201).json({name, email});

        } catch (error) {
            res.status(400).json("Error creating client");
        }
    };

    function clientsGet(req,res) {
        res.json(data)
    };

    function clientGetId(req, res){
        const {id} = req.params;
        const client = data.find(cli=>cli.id==id);
        res.json(client);
        if (client)return res.status(404).json();
    };

    function clientUpdateName(req,res){
        const {id} = req.params;
        const client = data.find(cli=>cli.id==id);
        const {name} = req.body;
        client.name = name;
        res.json(name);
    
        if (client)return res.status(404).json();
    };

    function clientDelete(req,res){
        const {id} = req.params;
        const clientsFiltered = data.filter(cli => cli.id != id);
        res.json(clientsFiltered)
    };

module.exports = {createClient, clientsGet, clientGetId, clientUpdateName, clientDelete};