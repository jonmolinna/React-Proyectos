import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Pusher from 'pusher';

import grupoRutas from './routes/grupo.routes.js';
import chatRutas from './routes/chat.router.js';

// app config
const app = express();
const port = process.env.PORT || 9000;

const pusher = new Pusher({
    appId: "1252098",
    key: "33bd7f1aa81d481acfaf",
    secret: "04142df9f92e39cd06b0",
    cluster: "us2",
    useTLS: true
});

// middleware
app.use(express.json());
app.use(cors());

// db config
const URI= 'mongodb+srv://admin:t4JdUPwVvDltrBst@cluster0.xtqx7.mongodb.net/whatsappReactDB?retryWrites=true&w=majority';
//const URI = 'mongodb://localhost/whatsapp_project';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
});


const db = mongoose.connection;

db.once("open", () => {
    console.log('DB Connected');

    const chatCollection = db.collection('chat');
    const changeStream = chatCollection.watch();

    changeStream.on('change', (change) => {
        console.log('A change occured', change);

        if(change.operationType === 'insert'){
            const messageDetails = change.fullDocument;
            pusher.trigger('messages', 'inserted',
            {
                message: messageDetails.message,
                name: messageDetails.name,
                timestamp: messageDetails.timestamp,
                idGrupo: messageDetails.idGrupo
            })
        } else {
            console.log('Error triggerring Pusher')
        }
    })

});

// app routes
app.get("/", (req, res) => res.status(200).send('Hola Mundo'));
app.use('/api', grupoRutas);
app.use('/api', chatRutas);

// Listen
app.listen(port, () => console.log(`Listening on localhost: ${port}`));