const Sequelize = require('sequelize');
const sequelize = require('../config/database');


const Products = sequelize.define('products', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false
  },
  qty: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

sequelize
  .sync()
  .then(() => {
    console.log('Products model synced successfully.');
  }, (err) => {
    console.error('An error has occurred:', err);
  });

module.exports = Products;
