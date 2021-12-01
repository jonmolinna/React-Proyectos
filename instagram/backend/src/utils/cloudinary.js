import cloudinary from 'cloudinary';
import { cloudinaryConfig } from '../configuracion.js';

cloudinary.v2.config({
    cloud_name: cloudinaryConfig.CLOUDINARY_CLOUD_NAME,
    api_key: cloudinaryConfig.CLOUDINARY_API_KEY,
    api_secret: cloudinaryConfig.CLOUDINARY_API_SECRET,
});

export default cloudinary;