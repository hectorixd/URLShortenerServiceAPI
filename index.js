const express = require('express');
const connectDB = require('./config/db');
const app = express();
const PORT = 5000;

// Connect to database
connectDB();

app.use(express.json({ extented: false }));
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
