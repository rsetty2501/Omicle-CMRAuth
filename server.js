

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");

// Initialize our app using express
const app = express();

// app.use is a Application level middleware
// Body parser middleware. Make express use body-parser in the application
// Returns a middleware that only parses url encoded data with queryString library
// The below function is called to parse and handle body of request
// This middleware is used in an application level
app.use(
    bodyParser.urlencoded({
        extended:false
    })
);
app.use(bodyParser.json()); // returns a middleware that only parses json

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true,
    useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

  // passport middleware
  app.use(passport.initialize());

  // Passport config
  // Passport is a middleware. This middleware is used to handle request with JWT token included in the header
  // Every request will go through this middleware
require("./config/passport")(passport);

// Function added with use() for a specific route
// routes : Register and Login 
// For register, store the user details in the database
// For login, validate the username and passowrd, generate a jwt token with secret and post/send the token to the client for future use
app.use("/api/users",users);

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));


