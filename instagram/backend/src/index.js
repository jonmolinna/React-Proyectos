import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import instagramRouter from './router.js';

// App Config
const app = express();
const port = process.env.PORT || 9000;

// Middleware
app.use(cors());
app.use(express.json());

// DB Config
const mongoURI = "mongodb://localhost/instagram_project";
mongoose.connect(mongoURI);

mongoose.connection.once('open', () => {
    console.log('DB Connected');
});

// Rutas
app.get('/', (req, res) => res.status(200).send('I message from backend'));
app.use('/api', instagramRouter);

// Listen
app.listen(port, () => console.log(`http://localhost:${port}/`))