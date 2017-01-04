const router = require('express').Router();
const users = require('../users/users-ctrl.js');
// const products = require('../products/products-ctrl.js');
// const orders = require('../orders/orders-ctrl.js');
// const comments = require('../comments/comments-ctrl.js');


//apply middleware to routes
const middleware = require('./middleware.js');

//list of all routed controllers
const controllers = [
  users
  // products,
  // orders,
  // comments
];

//routes to all controllers
for (var controller of controllers) {
  for (var route in controller) {
    if(controller[route].get) router.get(route, middleware.auth, controller[route].get);
    if(controller[route].post) router.post(route, middleware.auth, controller[route].post);
    if(controller[route].put) router.put(route, middleware.auth, controller[route].put);
    if(controller[route].delete) router.delete(route, middleware.auth, controller[route].delete);
  }
}

module.exports = router;
