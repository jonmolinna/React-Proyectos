import { model, Schema } from 'mongoose';

const messageSchema = new Schema({
    message: {
        type: String,
        required: [true, 'Ingrese un Mensaje']
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
}, { timestamps: true });

const message = model('message', messageSchema);

export default message; 