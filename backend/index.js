require('dotenv').config();
const express = require('express');
const connectToMongo = require('./db');

connectToMongo(); // connect to MongoDB first

const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
app.use(cors());


//middleware
app.use(express.json());


// Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
 