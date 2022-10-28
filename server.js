const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");

const inputCheck = require('./utils/inputCheck');

const mysql = require('mysql2');

const routes = require("./controllers");
// const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

require("dotenv").config();

const hbs = exphbs.create({});

const session =require('express-session');
const sequelize = require("./config/connection");

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join('./', "public")));

// Connect to the database
// const db = mysql.createConnection(
//   {
//     host: 'localhost',
//     user: 'root',
//     password: '203404447',
//     database: 'newsfeed'
//   },
// );


app.use(routes);

// app.get('/', (req, res) => {
//   res.json({
//     message: 'Hello World'
//   });
// });

app.post('/api/login', ({ body }, res) => {
  const errors = inputCheck(body, 'username', 'email', 'password');
  if (errors) {
    res.status(400).json({ error: errors });
  }
});
//Deploys the login page
// app.get('/login', (req, res) => {
//   res.sendFile(path.join(__dirname, './views/layouts/login.handlebars'));
// });

 sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});

