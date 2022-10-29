// Requiring express in our server
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const host = "0.0.0.0";

// Defining get request at '/' route
app.get("/", function (req, res) {
  res.json({
    slackUsername: "Tana00",
    backend: true,
    age: 29,
    bio: "Hi, I am Happiness, a tech and food lover. Nice to meet you!",
  });
});

// Setting the server to listen at port 3000
app.listen(PORT, function (req, res) {
  console.log(`Server is running at port ${PORT}`);
});
