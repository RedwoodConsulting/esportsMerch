const Users = require('./users-model.js');
const utils = require('../config/utilities.js');


const users = {
// export interface User {
//   name: string;
//   account: {
//     email: string;
//     confirm: string;
//   }
// }
  'signup': (req, res) => {
    Users.create({
      name: req.body.name,
      email: req.body.account.email,
      password: req.body.account.password
    })
    .then((user) => {
      utils.hashPassword(req.body.account.password)
      .then((hash) => {
        user.update({ password: hash })
        .then((updated) => {
          const token = utils.generateToken(user);
          res.status(201).send({
            token: token,
            user: { id: user.id, name: user.name }
          });
        })
        .catch((err) => {
          res.status(400).send({
            msg: 'Error updating password to hash.'
          });
        });
      })
      .catch((err) => {
        res.status(400).send({
          msg: 'Error hashing password.'
        });
      });
    })
    .catch((err) => {
      res.status(200).send({
        msg: 'The username you have selected already exists.'
      });
    });
  },

  'signin': (req, res) => {
    Users.findOne({
      where: {
        username: req.body.username
      }
    })
    .then((user) => {
      utils.comparePassword(req.body.password, user.password)
      .then((isMatch) => {
        if(isMatch) {
          const token = utils.generateToken(user);
          res.status(201).send({
            token: token,
            user: { id: user.id, username: user.username }
          });
        } else {
          res.status(200).send({
            msg: 'Incorrect Password.'
          });
        }
      })
      .catch((err) => {
        res.status(400).send({
          msg: 'Error comparing passwords.'
        });
      });
    })
    .catch((err) => {
      res.status(200).send({
        msg: 'The username you have selected does not exist.'
      });
    });
  },

  '/api/users/changePassword': {
    'put': (req, res) => {
      Users.findById(req.body.userID)
      .then((user) => {
        utils.comparePassword(req.body.password, user.password)
        .then((isMatch) => {
          if(isMatch) {
             utils.hashPassword(req.body.newPW)
            .then((hash) => {
              user.update({ password: hash })
              .then((updated) => {
                res.status(201).send({
                  msg: 'Password successfully updated.'
                });
              })
              .catch((err) => {
                res.status(400).send({
                  msg: 'Error updating password to hash.'
                });
              });
            });
          } else {
            res.status(200).send({
              msg: 'Incorrect Password.'
            });
          }
        })
        .catch((err) => {
          res.status(400).send({
            msg: 'Error comparing passwords.'
          });
        });
      })
      .catch((err) => {
        res.status(400).send({
          msg: 'Error changing password.'
        });
      });
    }
  }

}

module.exports = users;
