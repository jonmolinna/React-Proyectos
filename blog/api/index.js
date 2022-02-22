const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const multer = require('multer');

const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const categoryRoute = require('./routes/categories');

const app = express();
dotenv.config();

app.use(express.json());

mongoose
.connect(process.env.MONGO_URL)
.then(console.log('Connected to MongoDB'))
.catch(err => console.log(err));

// Multer
const storage = multer.diskStorage({
    // Lugar de almacenamiento
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    // Nombre del archivo
    filename: (req, file, cb) => {
        cb(null, "deya.jpg");
    },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
});

// Rutas
app.get("/", (req, res) => {
    res.status(200).json({
        msg: 'This is backend',
    })
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.listen("9000", () => {
    console.log("Backend is running.");
});