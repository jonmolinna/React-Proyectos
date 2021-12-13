import fs from 'fs';

const validationImg = (req, res, next) => {
    // Archivos Vacios
    if (typeof(req.file) === 'undefined'){
        return res.status(400).json({
            message: 'Seleccione un imagen',
        })
    }

    // Obteniendo Image
    let image = req.file.path;

    // Validamos el tipo de imagen sea png || jpg || jpeg
    if (!(req.file.mimetype).includes('jpeg') && !(req.file.mimetype).includes('png') && !(req.file.mimetype).includes('jpg')){
        // removemos el archivo
        fs.unlinkSync(image);
        return res.status(400).json({
            message: 'Archivo no compatible',
        });
    }

    // Validamos el tamaño del archivo a 4mb
    if (req.file.size > 1024 * 1024 * 4) {
        // removemos el archivo
        fs.unlinkSync(image);
        return res.status(400).json({
            message: 'El archivo es demasiado grande, se permite menor a 4MB'
        })
    }

    // Verificar campos vacios
    if(!image) {
        return res.status(400).json({
            message: 'Se requiere una Imagen'
        })
    }

    next();
};

export default validationImg;