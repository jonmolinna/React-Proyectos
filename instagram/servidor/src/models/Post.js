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
    name: String,
    createdAt: Number,
    comments: [
        {
            body: String,
            username: String,
            createdAt: Number,
        }
    ],
    likes: [
        {
            username: String,
            createdAt: Number,
        }
    ],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }

});

export default mongoose.model('Post', postSchema);