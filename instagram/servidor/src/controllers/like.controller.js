import Post from '../models/Post.js';

export const likePost = async (req, res) => {
    try {
        const { postId } = req.query;
        const { username } = req.userToken;

        const post = await Post.findById(postId)

        if(post){
            if(post.likes.find(like => like.username === username)){
                // no like
                post.likes = post.likes.filter(like => like.username !== username);
            } else {
                // like
                post.likes.push({
                    username,
                    createdAt: new Date().toISOString()
                })
            }
            await post.save();
            return res.json({ likes: post.likes });
        }
    } catch (error) {
        return res.status(500).json({ message: error})
    }
}