const routes = require('express').Router();
const homeController = require('./controllers/home.js');
const createController = require('./controllers/create.js');
const redirectController = require('./controllers/redirect.js');

routes.get('/', homeController);
routes.post('/create', createController);
routes.get('/:key', redirectController);

module.exports = routes;
