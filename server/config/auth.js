const auth = {
  
  'mysql' : {
    'hostname': process.env.db_hostname,
    'username': process.env.db_username,
    'password': process.env.db_password,
    'database': process.env.db_database
  },
  
  'jwt' : {
    'secret': process.env.jwt_secret
  }

}

module.exports = auth;
