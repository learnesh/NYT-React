// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");


// Initialize Express
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// Routing
var articlesController = require("./server/controllers/article-controller");
var router = new express.Router();
// Define any API routes first
router.get("/api/saved", articlesController.find);
// Save articles
router.post("/api/saved", articlesController.insert);
// delete saved articles
router.delete("/api/saved/:id", articlesController.delete);
// Send every other request to the React app
router.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.use(router);

// changes methods in forms from posts to puts
app.use(methodOverride('_method'));

// Set up a static folder (public) for our web app
app.use(express.static('./public'));
var routing = require('./routes/routes.js');
app.use(routing);
var db = require('./connection.js');

// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);

// Routing
var articlesController = require("./server/controllers/article-controller");
var router = new express.Router();
// Define any API routes first
router.get("/api/saved", articlesController.find);
// Save articles
router.post("/api/saved", articlesController.insert);
// delete saved articles
router.delete("/api/saved/:id", articlesController.delete);
// Send every other request to the React app
router.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.use(router);

// Connect mongoose to our database
const db = process.env.MONGODB_URI || "mongodb://localhost/nyt-react";
mongoose.connect(db, function(error) {
  // Log any errors connecting with mongoose
  if (error) {
    console.error(error);
  }
  // Or log a success message
  else {
    console.log("mongoose connection is successful");
  }
});

// Start the server
app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
