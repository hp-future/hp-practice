const mysql = require('mysql')

let connection = null
connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'user'
})
connection.connect()

module.exports = connection
