// Requiring express in our server
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const slackUsername = "Tana00";

// Defining get request at '/' route
app.get("/", (req, res) => {
  res.json({
    slackUsername,
    backend: true,
    age: 29,
    bio: "Hi, I am Happiness, a tech and food lover. Nice to meet you!",
  });
});

// Defining post request at '/post' route
app.post("/post", (req, res) => {
  const operation_type = req.body.operation_type;
  let x = Number(req.body.x);
  let y = Number(req.body.y);
  let result;
  let type = "addition" | "subtraction" | "multiplication";

  if (["addition", "add"].includes(operation_type)) {
    result = x + y;
    type = "addition";
  }
  if (["subtraction", "minus"].includes(operation_type)) {
    result = x - y;
    type = "subtraction";
  }
  if (["multiplication"].includes(operation_type)) {
    result = x * y;
    type = "multiplication";
  }

  res.send({
    slackUsername,
    result,
    operation_type: type,
  });
});

// Setting the server to listen at port 3000
app.listen(PORT, function (req, res) {
  console.log(`Server is running at port ${PORT}`);
});
