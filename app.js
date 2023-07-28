const mongoose = require('mongoose');
const express = require('express');

const app = express();

// middlewarre
app.use(express.static('public'))

// view engine
app.set('view engine', 'ejs');
