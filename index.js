const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const connectDB = require('./config/mongodb');
const authRoute = require('./route/auth');
const cors = require('cors');
const serverless = require('serverless-http'); // <-- Yeh yahan lazmi hona chahiye

const app = express();
const port = 3000;

connectDB();

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/auth', authRoute);


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


