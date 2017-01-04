const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const moment = require('moment');


const utilities = {

  generateToken: (user) => {
    const payload = {
      iss: 'tml',
      sub: user.id,
      iat: moment().unix(),
      exp: moment().add(7, 'days').unix()
    }
    return jwt.sign(payload, 'secret');
  },

  hashPassword: (input) => {
    return new Promise((resolve, reject) => {
      bcrypt.hash(input, 10, (error, hash) => {
        if (error) {
          reject(error);
        } else {
          resolve(hash);
        }
      });
    });
  },

  comparePassword: (input, hash) => {
    return new Promise((resolve, reject) => {
      bcrypt.compare(input, hash, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }
  
}

module.exports = utilities;
