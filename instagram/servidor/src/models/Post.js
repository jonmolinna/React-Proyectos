import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    body: {
        type: String,
        trim: true,
    },
    imageUrl: {
        type: String,
        trim: true,
        require: true
    },
    image_id: String,
    username: String,
    createdAt: String,
    comments: [
        {
            body: String,
            username: String,
            createdAt: String,
        }
    ],
    likes: [
        {
            username: String,
            createdAt: String,
        }
    ],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    }

});

export default mongoose.model('post', postSchema);