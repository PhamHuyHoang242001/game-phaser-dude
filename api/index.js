const express = require("express");
const serverless = require("serverless-http");
const path = require("path");

const app = express();

const router = express.Router();

// Serve static files
app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/assets", express.static(path.join(__dirname, "assets")));

// Route for homepage
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "homepage.html"));
});

app.use("/", router);

// Export serverless handler
module.exports = app;
module.exports.handler = serverless(app);
