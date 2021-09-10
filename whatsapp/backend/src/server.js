import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Pusher from 'pusher';

import messageRutas from './message.router.js';

// App Config
const app = express();
const port = process.env.PORT || 9000;

const pusher = new Pusher({
    appId: "1252098",
    key: "33bd7f1aa81d481acfaf",
    secret: "04142df9f92e39cd06b0",
    cluster: "us2",
    useTLS: true
});

// Middlewares
app.use(cors());
app.use(express.json());

// DB Config
//const mongoURI = "mongodb://localhost/whatsapp_project";
const mongoURI = "mongodb+srv://admin:feFqA7gm81yvm0W2@cluster0.xtqx7.mongodb.net/whatsapp_data?retryWrites=true&w=majority"
// id => feFqA7gm81yvm0W2

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
    console.log('DB Connected');

    const changeStream = mongoose.connection.collection('messages').watch()

    changeStream.on('change', (change) => {
        if(change.operationType === 'insert'){
            pusher.trigger('chats', 'newChat', {
                'change': change
            })
        } else if(change.operationType === 'update'){
            pusher.trigger('messages', 'newMessage', {
                'change': change
            })
        } else {
            console.log('Error triggering Pusher...')
        }
    })

});

// Rutas
app.get('/', (req, res) => res.status(200).send('I Message Backend'));
app.use('/api/message', messageRutas);

// Listen
app.listen(port, () => console.log(`Listening on Localhost: ${port}`));