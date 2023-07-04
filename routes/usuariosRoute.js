const express = require ('express')
const router = express.Router();
const usuariosController = require ('./../controllers/usuariosController');
const { addUsuario } = require('../models/usuariosModel');
const { validarCampos } = require('../middlewares/validar-campos');
const {check} = require ('express-validator');
// definimos las rutas y derivamos al controlador correspondiente. Una interfaz que dice donde se manejan estas cosas

// le decimos cual se encarga de resolver el GET

router.get('/', usuariosController.getusuario);
router.get('/:id', usuariosController.getusuarioById)
router.post('/', usuariosController.addUsuario);
router.put('/:id', usuariosController.updateusuario)
router.delete('/:id',usuariosController.deleteUsuarioById)




module.exports = router;

    
