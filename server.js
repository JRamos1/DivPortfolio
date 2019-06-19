const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require("mysql")
const sequelize = require("sequelize")
const env = require("dotenv").config()
const db = require("./models")
const passport   = require('passport')
const session    = require('express-session')
const bodyParser = require('body-parser')
const authController = require('./controllers/authcontroller.js');
//Routes
var authRoute = require('./routes/auth.js')(app, passport);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({ secret: 'ragtime cat',resave: true, saveUninitialized:true})); // session secret
 
app.use(passport.initialize());
 
app.use(passport.session());

//For React/JSX Templating

app.set('views', './views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

var models = require("./models");


require('./config/passport.js')(passport, models.user);

// Send every request to the React app
// Define any API routes before this runs
/* app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
}); */

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

db.sequelize.sync().then(function(){
  console.log("Nice Database looks fine!")

/*   app.listen(PORT,function(){
    console.log(`App listening on ${PORT}`)
  });
 */
}).catch(function(err){
  console.log(err, "Something went wrong with the Database Update!")
});
