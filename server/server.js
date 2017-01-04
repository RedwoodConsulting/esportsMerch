const express = require('express');
const server = require('http').createServer(app);
const database = require('./config/database.js');
const router = require('./config/router.js');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const moment = require('moment');
const auth = require('./config/auth.js');
const users = require('./users/users-ctrl.js');


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('./src'));
app.use('/src', express.static('./node_modules'));
app.use('/', router);

app.get('*', (req,res) => {
  res.sendFile(path.resolve('./', 'src', 'index.html'));
});

app.post('/auth/signup', users.signup);
app.post('/auth/signin', users.signin);

app.set('port', process.env.PORT || 8080);

server.listen(app.get('port'), () => {
  console.log(`[${moment().format('h:mm:ss a')}] Server is now listening on port ${app.get('port')}`);
});
