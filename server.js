const express = require('express');
const connectDB = require('./config/db');
const app = express();
// looks for enviroment variable called PORT to use when deployed to heroku
const PORT = process.env.PORT || 5000;

//Connect Database
connectDB();

app.get('/', (req, res) => res.send('API RUNNING'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
