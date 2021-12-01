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
}, { 
    timestamps: true, 
    versionKey: false 
});

export default mongoose.model('user', userSchema);