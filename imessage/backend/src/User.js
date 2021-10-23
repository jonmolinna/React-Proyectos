import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: {
        type: String,
        lowercase: true,
        trim: true,
    },
    username: {
        type: String,
        lowercase: true,
        trim: true,
    },
    imgURL: {
        type: String
    },
    password: {
        type: String,
    }
}, { timestamps: true });

export default mongoose.model('user', userSchema);