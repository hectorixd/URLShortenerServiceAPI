require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const app = express();

// Connect to database
connectDB();

app.use(express.json({ extented: false }));
app.listen(process.env.PORT, () => console.log('Server running...'));
