const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();
const chalk = require('chalk');



const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('tiny'));


const Port = process.env.PORT || 5000;
app.listen(Port, () => console.log(chalk.blue.bold(`Listeniing to ${chalk.red.bold(Port)}`)));




mongoose.connect(process.env.MONGODB, { useUnifiedTopology: true, useNewUrlParser: true })
   .then(
      () => console.log(chalk.blue.bold(`Connected to MongoDB`)
   )
 )
   .catch(
     (error) => console.log(chalk.red.bold(`ERROR: ${error}`)
   )
 );
