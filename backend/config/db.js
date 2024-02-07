const {createPool} =require('mysql2');

const pool = createPool({
    port :3306,
    host:"localhost",
    user:"root",
    password:"1234",
    database : "mydb",
    //connectionLimit :10
})

module.exports =pool;