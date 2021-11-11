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
const passport = require('passport')
//Database connection

const url='mongodb://localhost/foodorder';

mongoose.connect(url);

const connection=mongoose.connection;
connection.on('error', console.error.bind(console,'Connection Error'));


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
//Passport config
const passportInit = require('./app/config/passport')
passportInit(passport)
app.use(passport.initialize())
app.use(passport.session())

//Session Store
// Assets
app.use(flash());
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false}))
app.use(express.json())

//Global Middleware
app.use((req,res,next) => {
      res.locals.session = req.session
      res.locals.user = req.user
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