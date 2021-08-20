import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import chatRutas from './chat.router.js';

// app config
const app = express();
const port = process.env.PORT || 9000;

// middlewares
app.use(express.json());
app.use(cors());

const URI = 'mongodb://localhost/messenger_project';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once('open', () => {
    console.log('DB Connected');
});

// Rutas
app.get('/', (req, res) => res.status(200).send('Hola Mundo'));
app.use('/api', chatRutas);

// Listen
app.listen(port, () => console.log(`Listening on localhost: ${port}`));