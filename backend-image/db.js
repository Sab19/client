const mysql=require('mysql2')

const pool=mysql.createPool({
  host:'192.168.43.25',
  user:'root',
  password:'password',
  database:'mydb',
  port:9090,
  connectionLimit:10 
})

module.exports=pool
