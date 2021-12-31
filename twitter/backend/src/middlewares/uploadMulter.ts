import * as multer from 'multer';
import * as path from 'path';

// Nombre del archivo
const storage = multer.diskStorage({
    filename: function(req, file, cb) {
        cb(null, 'img'+'-'+ Date.now() + path.extname(file.originalname));
    }
});


let upload = multer({
    storage: storage
});

export default upload.single('image');