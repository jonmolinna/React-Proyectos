import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Pusher from 'pusher';

import chatRutas from './chat.router.js';

// app config
const app = express();
const port = process.env.PORT || 9000;

const pusher = new Pusher({
    appId: "1254899",
    key: "67142f14d3c0d4f4ff22",
    secret: "030af22c706e578eadb4",
    cluster: "us2",
    useTLS: true
});

// middlewares
app.use(express.json());
app.use(cors());

//const URI = 'mongodb://localhost/messenger_project';
const URI = 'mongodb+srv://admin:5sBtzVQVEajo92re@cluster0.qsb0w.mongodb.net/messengerDB?retryWrites=true&w=majority';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

mongoose.connection.once('open', () => {
    console.log('DB Connected');

    const changeStream = mongoose.connection.collection('messages').watch()
    changeStream.on('change', (change) => {
        pusher.trigger('messages', 'newMessage', {
            'change': change
        });
    });
});

// Rutas
app.get('/', (req, res) => res.status(200).send('Hola Mundo'));
app.use('/api', chatRutas);

// Listen
app.listen(port, () => console.log(`Listening on localhost: ${port}`));