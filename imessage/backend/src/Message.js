import mongoose from 'mongoose';

const messageSchema = mongoose.Schema({
    message: {
        type: String,
        trim: true,
    },
    from: {
        type: String,
    },
    to: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
}, { timestamps: true });

export default mongoose.model('message', messageSchema);