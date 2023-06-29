const express = require('express');
const router = express.Router();
const cursosController = require('./../controllers/cursosController');
const { validarCampos } = require('../middlewares/validar-campos');
const { addCurso } = require('../models/cursosModel');
const {check} = require ('express-validator');
// Definimos las rutas para derivar al controlador correspondiente

router.get('/', cursosController.getCursos);
router.get('/:id', cursosController.getCursosById);
//router.post('/', cursosController.addCurso);
router.put('/:id', cursosController.updateCurso);
router.delete('/:id',cursosController.deleteCursoById);
router.post('/:id/estudiantes', cursosController.addEstudianteAUnCurso);


router.post('/',
[
    check('nombre', 'El nombre es obligatorio').not ().isEmpty(),
    check('descripcion', 'La descripcion es es obligatoria').not ().isEmpty(),
    validarCampos
]
,  cursosController.addCurso
)
router.put('/',
[
    check('nombre', 'El nombre es obligatorio').not ().isEmpty(),
    check('descripcion', 'La descripcion es es obligatoria').not ().isEmpty(),
    validarCampos
]
,  cursosController.updateCurso
)



module.exports = router;
    
