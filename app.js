const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const registerRouter = require('./api/routes/register');

//Connect On Local Database
const uri = 'mongodb://127.0.0.1:27017/tShirtShop';
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
const database = mongoose.connection; //Retrieve Connection

//Create APP
const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json()); //Parse JSON Files
app.use(cors()); //Allow CORS
app.use('/register', registerRouter);



app.listen(PORT, () => {
  console.log(`API Listening on PORT: ${PORT}`);
});
