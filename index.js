require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const app = express();

// Connect to database
connectDB();

app.use(express.json({ extented: false }));

// Define routes
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

app.listen(process.env.PORT, () => console.log('Server running...'));
