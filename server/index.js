require('dotenv').config();
const express = require('express'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    massive = require('massive'),
    passport = require('passport'),
    Auth0Strategy = require('passport-auth0');
    cors = require('cors');
    DonutsCtrl = require('./controllers/DonutsCtrl');
    PurchasedCtrl = require('./controllers/PurchasedCtrl');
    OrdersCtrl = require('./controllers/OrdersCtrl');
    CartCtrl = require('./controllers/CartCtrl');
    ReviewsCtrl = require('./controllers/ReviewsCtrl');
    
const {SERVER_PORT, SESSION_SECRET,DOMAIN,CLIENTID,CLIENT_SECRET, CALLBACK_URL, CONNECTION_STRING} = process.env;
const app = express();

app.use(bodyParser.json());
app.use(cors());
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

app.get('/api/donuts', DonutsCtrl.getAllDonuts)
app.get('/api/donuts/:id', DonutsCtrl.getDonuts)
app.delete('/api/donuts', DonutsCtrl.deleteDonuts)
app.patch('/api/donuts', DonutsCtrl.updateDonuts)
app.post('/api/donuts', DonutsCtrl.createDonuts)

app.get('/api/cart', CartCtrl.getCart)
app.delete('/api/cart', CartCtrl.deleteCart)
app.patch('/api/cart', CartCtrl.updateCart)
app.post('/api/cart', CartCtrl.createCart)

app.get('/api/orders', OrdersCtrl.getAllOrders)
app.get('/api/orders', OrdersCtrl.getOrders)
app.delete('/api/orders', OrdersCtrl.deleteOrders)
// app.patch('/api/orders', OrdersCtrl.updateOrders)
app.post('/api/orders', OrdersCtrl.createOrders)

app.get('/api/purchased', PurchasedCtrl.getAllPurchased)
app.get('/api/purchased', PurchasedCtrl.getPurchased)
app.delete('/api/purchased', PurchasedCtrl.deletePurchased)
app.patch('/api/purchased', PurchasedCtrl.updatePurchased)
app.post('/api/purchased', PurchasedCtrl.createPurchased)

app.get('/api/reviews', ReviewsCtrl.getAllReviews)
app.get('/api/reviews', ReviewsCtrl.getReviews)
app.delete('/api/reviews', ReviewsCtrl.deleteReviews)
app.patch('/api/reviews', ReviewsCtrl.updateReviews)
app.post('/api/reviews', ReviewsCtrl.createReviews)

app.listen(SERVER_PORT, () => {
    console.log(`The Secret Sauce is on Port ${SERVER_PORT}`);
})