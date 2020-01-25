const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();



const app = express();

mongoose.connect('')
   .then(() => console.log(`Connected to MongoDB`));
   .catch( error => console.log(`ERROR: ${error}`));

const Port = process.env.PORT || 5000;

app.listen(Port, () => console.log(`Listeniing to ${Port}`));
