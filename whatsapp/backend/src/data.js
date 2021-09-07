import mongoose from 'mongoose';

const messageSchema = mongoose.Schema({
    chatName: String,
    imgUrl: String,
    conversation: [
        {
            message: String,
            timestamp: String,
            user: {
                userName: String,
                uid: String
            }
        }
    ]
});

export default mongoose.model('messages', messageSchema);