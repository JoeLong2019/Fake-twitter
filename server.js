const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

// Bodyparser Middlewarenpm
app.use(bodyParser.json());

// DB Config
const DB = require('./mern list/config/keys').mongoURI;

// Connect to mongo
mongoose.connect(db)
.then(() => console.log('MomgoDB Connected...'))
.catch(err => console.log(err));

// Use Routes
app.use('./api/items', items);

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Server started on port ${port}`));