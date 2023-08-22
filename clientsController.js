const express = require('express');
const app = express();
app.use(express.json());
const data = require('./data.json');
const Client = require('./clientsServer');


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

            return res.status(201).json({name, email});

        } catch (error) {
            res.status(400).json("Error creating client");
        }
    };

    function clientsGet(req,res) {
        res.json(data)
    };

module.exports = {createClient, clientsGet};