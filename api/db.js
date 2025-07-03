import mysql from 'mysql2'

export const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '@MySQL_botan_2005',
  database: 'crud_react',
})