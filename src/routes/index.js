const express = require('express');
const clientController = require('../controllers/clientsController');
const routes = express.Router();


routes.get("/clients", clientController.clientsGet);

routes.post("/clients", clientController.createClient);

routes.get("/clients/:id", clientController.clientGetId);

routes.put("/clients/:id", clientController.clientUpdateName);

routes.delete("/clients/:id", clientController.clientDelete);

module.exports = routes;
