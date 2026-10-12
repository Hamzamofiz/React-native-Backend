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

app.use('/', authRoute);

if (process.env.NODE_ENV !== 'production') {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}

// Vercel ke liye export
module.exports = serverless(app);