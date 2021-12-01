import multer from 'multer';
import path from 'path';

// Destino y nombre del Archivo
const storage = multer.diskStorage({
    // Mostrar el destino de la carpeta
    // destination: function(req, res, cb){
    //     cb(null, 'C:/Users/LENOVO/Desktop/React-Proyectos/instagram/backend/src/uploads')
    // },
    filename: function(req, file, cb) {
        // generando unico nombre para cada imagen
        cb(null, 'img'+'-'+ Date.now() + path.extname(file.originalname));
    },
});

// validacion
const filerFilter = (req, file, cb) => {
    cb(null, true)
};

let upload = multer({
    storage: storage,
    fileFilter: filerFilter
});

// export upoad as single file you can use multiaple
export default upload.single('image');
