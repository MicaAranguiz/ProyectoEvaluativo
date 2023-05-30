const db = require('./../config/db');
const{ Router} = require("express");
// tiene que ser asincronica porque todo se ejecuta al mismo tiempo y de esa manera anda
// el console log 
exports.obtenerEstudiantes = async () => {
    const [rows, fiels] = await db.execute('SELECT * FROM estudiantes')
    console.log(rows)
    return rows;
}