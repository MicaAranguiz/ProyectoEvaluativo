const express = require ('express')
const router = express.Router();
const estudiantesController = require ('./../controllers/estudiantesController')
// definimos las rutas y derivamos al controlador correspondiente. Una interfaz que dice donde se manejan estas cosas

// le decimos cual se encarga de resolver el GET

router.get('/', estudiantesController.getEstudiantes);

module.exports = router;

    
