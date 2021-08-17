import mongoose from 'mongoose';

const chatSchema = mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    idGrupo: String
});

export default mongoose.model('Chat', chatSchema);