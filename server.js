import express from 'express';
const app = express();
// looks for enviroment variable called PORT to use when deployed to heroku
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('API RUNNING'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
