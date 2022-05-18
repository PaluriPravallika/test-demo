const mysql= require('mysql2');
const conn=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Pravallika@1999",
    database:"sample",
});
conn.connect();
module.exports=conn;