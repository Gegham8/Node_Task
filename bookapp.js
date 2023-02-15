const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const app = express();
const Bookcontroller = require('./controller/books')


mongoose.connect('mongodb://localhost:27017/users', { useNewUrlParser : true });
const db = mongoose.connection;
db.on('open', () => {
    console.log('Connected to MongoDB');
})
db.on('error',(err) => {
    console.log('Error' + err);
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/',Bookcontroller);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Connected to port ${PORT}`);
})