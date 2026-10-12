const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./config/mongodb');
const authRoute = require('./route/auth')
const cors = require('cors');

const app = express();
const port = 3000;

connectDB();

app.use(express.json());
app.use(cors());


app.use('/', authRoute);

// app.get('/', (req, res) => {
//     res.send('API is running...');
// });

app.listen(port,() =>{
    console.log(`Server running on port ${port}`);
})

