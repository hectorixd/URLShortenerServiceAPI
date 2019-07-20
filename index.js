const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json({ extented: false }));
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
