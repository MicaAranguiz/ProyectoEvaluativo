const express = require ('express')
const router = express.Router();
const profesoresController = require ('./../controllers/profesoresController');
const { addProfesor } = require('../models/profesoresModel');
const { validarCampos } = require('../middlewares/validar-campos');
const {check} = require ('express-validator');
// definimos las rutas y derivamos al controlador correspondiente. Una interfaz que dice donde se manejan estas cosas

// le decimos cual se encarga de resolver el GET

router.get('/', profesoresController.getProfesores);
router.get('/:id', profesoresController.getProfesoresById)
//router.post('/', profesoresController.addProfesor);
//router.put('/:id', profesoresController.updateProfesor)
router.delete('/:id',profesoresController.deleteProfesorById)


router.post('/',
[
    check('nombre', 'El nombre es obligatorio').not ().isEmpty(),
    check('especialidad', 'La especialidad es es obligatoria').not ().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    validarCampos
]
, profesoresController.addProfesor
)

router.put('/',
[
    check('nombre', 'El nombre es obligatorio').not ().isEmpty(),
    check('especialidad', 'La especialidad es es obligatoria').not ().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    validarCampos
]
, profesoresController.updateProfesor
)


module.exports = router;

    
