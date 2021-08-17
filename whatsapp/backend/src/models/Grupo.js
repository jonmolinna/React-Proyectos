import mongoose from 'mongoose';

const grupoSchema = mongoose.Schema({
    name: String,
    imagen: String,
});

export default mongoose.model('Grupo', grupoSchema);