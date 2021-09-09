import mongoose from 'mongoose';

const messageSchema = mongoose.Schema({
    chatName: String,
    imgUrl: String,
    conversation: [
        {
            message: String,
            timestamp: String,
            user: String,
        }
    ]
});

export default mongoose.model('messages', messageSchema);