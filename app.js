const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('./config/passport');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(passport.initialize());

// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/auth', authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
