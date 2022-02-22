const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');

const app = express();
dotenv.config();

app.use(express.json());

mongoose
.connect(process.env.MONGO_URL)
.then(console.log('Connected to MongoDB'))
.catch(err => console.log(err));

app.get("/", (req, res) => {
    res.status(200).json({
        msg: 'This is backend',
    })
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

app.listen("9000", () => {
    console.log("Backend is running.");
});