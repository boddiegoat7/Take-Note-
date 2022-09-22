const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");

const inputCheck = require('./utils/inputCheck');

const mysql = require('mysql2');

const routes = require("./controllers");
//const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

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

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World'
  });
});

app.post('/api/login', ({ body }, res) => {
  const errors = inputCheck(body, 'username', 'email', 'password');
  if (errors) {
    res.status(400).json({ error: errors });
  }
});


// sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
//});
