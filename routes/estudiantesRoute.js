const express = require ('express')
const router = express.Router();
const estudiantesController = require ('./../controllers/estudiantesController');
const { validarCampos } = require('../middlewares/validar-campos');
const { addEstudiante } = require('../models/estudiantesModel');
const {check} = require ('express-validator');
// definimos las rutas y derivamos al controlador correspondiente. Una interfaz que dice donde se manejan estas cosas

// le decimos cual se encarga de resolver el GET

router.get('/', estudiantesController.getEstudiantes);
router.get('/:id', estudiantesController.getEstudianteById);
router.get('/:id/cursos', estudiantesController.getCursosDelEstudiante);
// router.post('/', estudiantesController.addEstudiante);
// router.put('/:id', estudiantesController.updateEstudiante)
router.delete('/:id',estudiantesController.deleteEstudianteById)


router.post('/',
[
    check('nombre', 'El nombre es obligatorio').not ().isEmpty(),
    check('edad', 'La edad es es obligatoria').not ().isEmpty(),
    check('grado', 'El grado es obligatorio').not ().isEmpty(),
    validarCampos
]
, estudiantesController.addEstudiante
)


router.put('/',
[
    check('nombre', 'El nombre es obligatorio').not ().isEmpty(),
    check('edad', 'La edad es es obligatoria').not ().isEmpty(),
    check('grado', 'El grado es obligatorio').not ().isEmpty(),
    validarCampos
]
, estudiantesController.updateEstudiante
)



module.exports = router;

    
