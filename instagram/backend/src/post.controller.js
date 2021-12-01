import Post from './Post.js';
import cloudinary from './utils/cloudinary.js';

export const createPost = async (req, res) => {
    try {
        let image = req.file.path;
        let body = req.body.comment || null;

        const result = await cloudinary.uploader.upload(image);

        let newPost = new Post({
            body: body,
            imageUrl: result.secure_url,
            image_id: result.public_id,
            username: 'desconocido',
            createdAt: new Date().toISOString(),
        });

        const post = await newPost.save();

        return res.json({ post });

    } catch (error) {
        console.log(error);
    }

};