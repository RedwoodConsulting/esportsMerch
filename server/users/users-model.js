const Sequelize = require('sequelize');
const sequelize = require('../config/database');


const Users = sequelize.define('users', {
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

sequelize
  .sync()
  .then(() => {
    console.log('Users model synced successfully.');
  }, (err) => {
    console.error('An error has occurred:', err);
  });

module.exports = Users;

