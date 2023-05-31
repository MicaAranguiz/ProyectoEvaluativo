const express = require('express');
const router = express.Router();
const cursosController = require('./../controllers/cursosController');
// Definimos las rutas para derivar al controlador correspondiente

router.get('/', cursosController.getCursos);
router.get('/:id', cursosController.getCursosById);
router.post('/', cursosController.addCurso);
router.put('/:id', cursosController.updateCurso);
router.delete('/:id',cursosController.deleteCursoById);

module.exports = router;
    
