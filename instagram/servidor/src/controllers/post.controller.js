import Post from '../models/Post.js';
import cloudinary from '../utils/cloudinary.js';

export const createPost = async (req, res) => {
    try {
        let image = req.file.path;
        let body = req.body.comment || null;

        const result = await cloudinary.uploader.upload(image);

        let newPost = new Post({
            body: body,
            imageUrl: result.secure_url,
            image_id: result.public_id,
            username: req.userToken.username,
            createdAt: new Date().toISOString(),
        });

        const post = await newPost.save();

        return res.json({ post });

    } catch (error) {
        return res.status(401).json({ message: error})
    }

};

export const getAllPosts = async (req, res) => {
    
}