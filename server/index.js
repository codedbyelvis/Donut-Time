require('dotenv').config();
const express = require('express'),
    session = require('express-session'),
    massive = require('massive'),
    passport = require('passport'),
    Auth0Strategy = require('passport-auth0');
    
const {SERVER_PORT, SESSION_SECRET,DOMAIN,CLIENTID,CLIENT_SECRET, CALLBACK_URL, CONNECTION_STRING} = process.env;
const app = express();

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use(passport.initialize());
app.use(passport.session());

massive(CONNECTION_STRING).then( db => {
    console.log('DB connected')
    app.set('db', db);
}).catch(console.log);

passport.use(new Auth0Strategy({
    domain: DOMAIN,
    clientID: CLIENTID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
    scope: 'openid profile'
},    function(accessToken, refreshToken, extraParams, profile, done) {
        const db = app.get('db');

        const { sub, name, picture } = profile._json;
        console.log(profile);
        db.find_user([sub]).then(resp => {
            if(resp[0]) {
                done(null, resp[0].id)
            } else {
                db.create_user([name, picture, sub])
            }
        })
}))

passport.serializeUser( (id, done) => {
    done(null, id);
})
passport.deserializeUser( (id, done) => {
    const db = app.get('db');
    db.find_logged_in_user([id]).then( res => {
        done(null, res[0]);
    }).catch(console.log);
})

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/donuts'
}))

app.get('/auth/me', (req,res) => {
    if(!req.user) {
        res.status(404).send('Please log in')
    } else {
        res.status(200).send(req.user);
    }
})

app.get('/logout', (req,res) => {
    req.logOut();
    res.redirect('http://localhost:3000/');
})

app.listen(SERVER_PORT, () => {
    console.log(`The Secret Sauce is on Port ${SERVER_PORT}`);
})