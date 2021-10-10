const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// internal imports

const { notFoundHandler, errorHandler } = require('./middleware/errorHandler');
const router = require('./routes/router');

const app = express();
app.use(cors());
dotenv.config();

// mongodb connection

mongoose.connect(process.env.MONGO_CONNECTION_STRING)
    .then(() => console.log('connection established'))
    .catch((err) => console.log(err))


// request parser

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes

app.use('/user', router);

// error handler

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
});