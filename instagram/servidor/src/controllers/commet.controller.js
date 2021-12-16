import Post from '../models/Post.js';
import { validateComment } from '../utils/validation.commet.js';

export const commentPost = async (req, res) => {
    const { comment } = req.body;
    const { username } = req.userToken;
    const { postId } = req.query;
    
    try {
        const { valid, errors } = validateComment(comment);

        if(!valid){
            throw errors
        }


        const post = await Post.findById(postId);

        if(post){
            post.comments.unshift({
                body: comment,
                username: username,
                createdAt:  Date.now(),
            });
            await post.save();
            return res.json({ comments: post.comments });
        }
    } catch (error) {
        return res.status(500).json({ message: error})
    }
};