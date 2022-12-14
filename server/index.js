if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const PORT = process.env.PORT || 3080;
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');
const app = express();

// connect to db
mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB Connected'))
    .catch(error => console.log(error));

// middlewares
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// routes
app.use('/api', require('./routes/user'));
app.use('/api', require('./routes/omdb'));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

