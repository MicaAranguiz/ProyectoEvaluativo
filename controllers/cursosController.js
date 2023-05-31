const cursosModel = require('./../models/cursosModel') // traemos todo lo que tiene dentro 


exports.getCursos = async (req, res) => {
    //evaluamos el bloque dentro del try
    try {
        //obtenemos los datos desde el modelo
        const cursos = await cursosModel.obtenerCursos();

        //si todo va bien respondemos con los usuarios, del lado del cliente
        //lo obtenemos con json
        //status 200 que todo fue ok
        res.status(200).json({
            success: true,
            data: cursos
        })

    } catch (error) {
        //si las instrucciones dentro del bloque try fallan, 
        //capturamos el error, lo mostramos en consola
        //y devolvemos la info del error al cliente
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Hubo un error al obtener los datos'
        })
    }
}
exports.getCursosById = async (req, res) => {
    const idCursos = req.params.id;
    try {
        const cursos = await cursosModel.getCursosById(idCursos)

        if (cursos.length < 1) {
            res.status(404).json({
                success: false,
                msg: `nO EXISTE: ${idCursos}`
            })

        }
        res.status(200).json({
            success: true,
           cursos

        })
    }

    catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Hubo un error al obtener los datos de los Profesores'
        })
    }
}
exports.addCurso = async (req, res) => {
    const nuevoCurso = req.body;
    try {
        const id = await cursosModel.addCurso(nuevoCurso)
        res.status(201).json({
            success: true,
            message: "ANDUVO",
            nuevoCurso
        })
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Hubo un error al obtener los datos'
        })
    }
}

exports.updateCurso = async (req, res) => {
    const id = req.params.id;
    const cursoActualizado = req.body;

    const curso = {
        id,
        ...cursoActualizado  //muestra todo lo que necesitamos de forma mas breve
    }
    console.log(curso)
    try {
        const listaActualizada = await cursosModel.updateCurso(curso)
        if (listaActualizada < 1) {
            res.status(404).json({
                success: false,
                message: "datos no actualizados"
            })
         }
        res.status(200).json({
            success: true,
            message: "lista actualizada",
        curso
        })
     }
     catch(error) {
        res.status(500).json({
            success: false,
            message: "No anda"
        })
        }
    }

    exports.deleteCursoById = async(req, res)=>{

        const idCurso = req.params.id;
        try {
            const curso = await cursosModel.deleteCursoById(idCurso)
    
            if(curso.length<1){ //pregunto si existe el usuario
                res.status(404).json({
                    success:false,
                    mgs:`No existe usuario con el id: ${idCurso}`
                })
            }
            //si todo va bien y existe el usuario =D
            res.status(200).json({
                success:true,
                msg:"El usuario fue eliminado con exito"
            })
        } catch (error) {
    
            console.error(error);
            res.status(500).json({
                success:false,
                message: 'Hubo un error al eliminar el usuario'
            })
        }
    } 
