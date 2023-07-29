import express from 'express';
const app = express();
const PORT = 3500;
import connectDB from './db/connectDB.js';
import mongoose from 'mongoose';


// middleware
app.use(express.static('public'));

// view engine
app.set('view engine', 'ejs');


// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));


// connecting to DATABASE
const DATABASE_URL= "mongodb+srv://rahul:FbOtxpPekQ3HwRNK@ultra-demo.npfep38.mongodb.net/?retryWrites=true&w=majority"
connectDB(DATABASE_URL)

app.listen(PORT, () => {
    console.log("listening on http://localhost:3500");
})
