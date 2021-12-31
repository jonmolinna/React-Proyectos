import * as cloudinary from 'cloudinary';
import config from './config';

cloudinary.v2.config({
    cloud_name: config.CLOUDINARY_CLOUD_NAME,
    api_secret: config.CLOUDINARY_API_SECRET,
    api_key: config.CLOUDINARY_API_KEY as any,
});

export default cloudinary;