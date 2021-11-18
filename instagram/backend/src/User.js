import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: {
        type: String,
        lowercase: true,
        trim: true
    },
    username: {
        type: String,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
    },
    imgUrl: {
        type: String,
        default: null
    },
}, { 
    timestamps: true, 
    versionKey: false 
});

export default mongoose.model('user', userSchema);