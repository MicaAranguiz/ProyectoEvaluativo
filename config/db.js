//conexion a la base de datos
const config = require ('dotenv');
const mysql = require ('mysql2');

// creamos el lazo a la base de datos 
const pool = mysql.createPool({
    // van las credenciales para acceder a la base que queramos
    host: 'localhost',
    user: 'root',
    password:'',
    database: 'sistemaescolar',
})

module.exports = pool.promise();
