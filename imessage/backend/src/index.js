import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import messageRouter from './router.js';

// App Config
const app = express();
const port = process.env.PORT || 9000;

// Middleware
app.use(cors());
app.use(express.json());

// DB Config
const mongoURI = "mongodb://localhost/telegram_project";

mongoose.connect(mongoURI);

mongoose.connection.once('open', () => {
    console.log('DB Connected');
});

// Rutas
app.get('/', (req, res) => res.status(200).send('I message from Backend'));
app.use('/api', messageRouter);

// Listen
app.listen(port, () => console.log(`http://localhost:${port}/`));