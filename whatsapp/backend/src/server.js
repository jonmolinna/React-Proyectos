import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Pusher from 'pusher';

import messageRutas from './message.router.js';

// App Config
const app = express();
const port = process.env.PORT || 9000;

// Middlewares
app.use(cors());
app.use(express.json());

// DB Config
const mongoURI = "mongodb://localhost/whatsapp_project";

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
    console.log('DB Connected');
});

// Rutas
app.get('/', (req, res) => res.status(200).send('I Message Backend'));
app.use('/api/message', messageRutas);

// Listen
app.listen(port, () => console.log(`Listening on Localhost: ${port}`));