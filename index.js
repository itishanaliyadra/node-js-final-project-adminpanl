require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const db = require('./config/db');
const cookie = require('cookie-parser');
const connectmongo = require('connect-mongo')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use('/ulplodesImg', express.static(path.join('ulplodesImg')))
app.use(express.static(path.join(__dirname, 'public/admin')))
app.use(express.static(path.join(__dirname, 'public/user')))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



//passport js
const passport = require('passport');
const passportLocal = require('./middelwear/passport-Local-strag');
const session = require('express-session');
app.use(session({
    name: "project",
    secret: "p-rnw",
    resave: true,
    store:new connectmongo({
        mongoUrl:"mongodb://127.0.0.1/api",
        collectionName:'sessions'
    }) ,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60
    }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthentication);
app.use(cookie());


app.use('/', require('./routes/admin/pages_routes'));
app.use('/pages', require('./routes/user/pages_routes'));
const port = process.env.PORT;
app.listen(port, () => console.log(`Server url is localhost://${port}`));