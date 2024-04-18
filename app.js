require('dotenv').config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');
const session = require('express-session');
const connectDB = require('./server/config/db');

const app = express();
const port = process.env.PORT || 3000;

// Connect to Database  
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride('_method'));

// Static Files
app.use(express.static('public'));

// Express Session
app.use(
  session({
    secret:'secret',
    resave:false,
    saveUninitialized:true,
    cookie: {
      maxAge:1000 * 60 * 60 * 24 * 7,
    }
  })

)
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// Routes
app.use('/', require('./server/routes/customer'));

// 404 Not Found Middleware
app.use((req, res, next) => {
  res.status(404).render('404');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
