require('dotenv').config()
const express = require('express')
const app = express()
const ejs = require('ejs')
const expressLayout = require('express-ejs-layouts')
const path =  require('path')
const PORT = process.env.PORT || 3000
const mongoose=require('mongoose')
const session = require('express-session')
const flash = require('express-flash')
const MongoDbStore=require('connect-mongo')
//Database connection

const url='mongodb://localhost/foodorder';

mongoose.connect(url);

const connection=mongoose.connection;
connection.on('error', console.error.bind(console,'Connection Error'));

//Session Store
// let mongoStore = new MongoDbStore({
//     mongooseConnection: connection,
//     collection: 'sessions'
// })
// Session config

app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    store: MongoDbStore.create({
        mongoUrl:url,
        // dbName:foodorder,
        collectionName:'sessions',
    }),
}));

// Assets
app.use(flash());
app.use(express.static('public'))
app.use(express.json())

//Global Middleware
app.use((req,res,next) => {
      res.locals.session = req.session
      next()
})
// set Template engine
app.use(expressLayout)
app.set('views',path.join(__dirname,'/resources/views'))
app.set('view engine','ejs')

const temp = require('./routes/web')(app);


app.listen(PORT,() =>{
    console.log('Listening on port 3000');
})