require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');
const morgan = require('morgan');

// DATABASE
require('./config/database');

const Fruit = require('./models/fruit.js');

const app = express();

// MIDDLEWARE
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
const fruitsCtrl = require("./controllers/fruits");
// ROUTES

// Landing Page
app.get('/', fruitsCtrl.home);

// Fruits
app.get('/fruits/new', fruitsCtrl.nwe);

app.post('/fruits', fruitsCtrl.create);

app.get('/fruits', fruitsCtrl.index);

app.get('/fruits/:fruitId',fruitsCtrl.show );

app.delete('/fruits/:fruitId',fruitsCtrl.deleted);

app.get('/fruits/:fruitId/edit', fruitsCtrl.edit);

app.put('/fruits/:fruitId', fruitsCtrl.update);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});