const db = require('./../config/db');
const { Router } = require("express");
// tiene que ser asincronica porque todo se ejecuta al mismo tiempo y de esa manera anda
// el console log 
exports.obtenerUsuarios = async () => {
    const [rows, fiels] = await db.execute('SELECT * FROM usuarios')
    console.log(rows)
    return rows;
}

exports.getUsuarioById = async (id) => {
    const [rows, fields] = await db.execute('SELECT usuario, password FROM usuarios WHERE id=?', [id]);
    console.log(rows)
    return rows;
}

exports.addUsuario = async (nuevousuario) => {
    const [rows, fields] = await db.execute('INSERT INTO usuarios (usuario, password) VALUES (?, ?)', [nuevousuario.usuario, nuevousuario.password]);
    return rows;
}
exports.updateUsuario = async(usuario)=>{
    const [rows, fields] = await db.execute('UPDATE usuarios SET usuario = ?, password = ?, WHERE id = ?', [usuario.usuario, usuario.password, usuario.id]);
    return rows;
}
exports.deleteUsuarioById = async (id) =>{
    const [rows, fields] = await db.execute('DELETE FROM usuarios WHERE id = ?', [id]);
    return rows;
} 
