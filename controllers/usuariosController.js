const usuariosModel = require('./../models/usuariosModel')
// traemos todo lo que tiene dentro 

exports.getusuario = async (req, res) => {
    //evaluamos el bloque dentro del try
    try {
        //obtenemos los datos desde el modelo
        const usuarios = await usuariosModel.obtenerUsuarios();

        //si todo va bien respondemos con los usuarios, del lado del cliente
        //lo obtenemos con json
        //status 200 que todo fue ok
        res.status(200).json({
            success: true,
            data: usuarios
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

exports.getusuarioById = async (req, res) => {
    const idusuarios = req.params.id;
    try {
        const usuarios = await usuariosModel.getUsuarioById(idusuarios)

        if (usuarios.length < 1) {
            res.status(404).json({
                success: false,
                msg: `nO EXISTE: ${idusuarios}`
            })

        }
        res.status(200).json({
            success: true,
            usuarios

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

exports.addUsuario = async (req, res) => {
    const nuevousuario = req.body;
    try {
        const id = await usuariosModel.addUsuario(nuevousuario)
        res.status(201).json({
            success: true,
            message: "ANDUVO",
            nuevousuario
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


exports.updateusuario = async (req, res) => {
    const id = req.params.id;
    const usuariosActualizado = req.body;

    const usuarios = {
        id,
        ...usuariosActualizado  //muestra todo lo que necesitamos de forma mas breve
    }
    console.log(usuarios)
    try {
        const listaActualizada = await usuariosModel.updateUsuario(usuarios)
        if (listaActualizada < 1) {
            res.status(404).json({
                success: false,
                message: "datos no actualizados"
            })
        }
        res.status(200).json({
            success: true,
            message: "lista actualizada",
            usuarios
        })
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "No andaaaaaaaaaaaaa"
        })
    }
}
exports.deleteUsuarioById = async (req, res) => {

    const idusuario = req.params.id;
    try {
        const usuarios = await usuariosModel.deleteUsuarioById(idusuario)

        if (usuarios.length < 1) { //pregunto si existe el usuario
            res.status(404).json({
                success: false,
                mgs: `No existe usuario con el id: ${idusuario}`
            })
        }
        //si todo va bien y existe el usuario =D
        res.status(200).json({
            success: true,
            msg: "El usuario fue eliminado con exito"
        })
    } catch (error) {

        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Hubo un error al eliminar el usuario'
        })
    }
}  


exports.getCursosDelusuarios = async (req, res) => {
    const idusuarios = req.params.id;
    try {
        const usuarios= await usuariosModel.getCursosDelusuarios(idusuarios)

        if (usuarios.length < 1) {
            res.status(404).json({
                success: false,
                msg: `nO EXISTE: ${idusuarios}`
            })

        }
        res.status(200).json({
            success: true,
           usuarios

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