// Requiring express in our server
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const slackUsername = "Tana00";

const additionSynonyms = [
  "addition",
  "add",
  "adding",
  "summation",
  "totalling",
  "total",
  "plus",
];

const subtractionSynonyms = ["subtraction", "minus", "remove"];

const multiplicationSynonyms = ["multiplication", "multiply"];

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
  const operation_type = req.body.operation_type.split(" ");
  let x = Number(req?.body?.x);
  let y = Number(req.body.y);

  let result;
  let type = "addition" | "subtraction" | "multiplication";

  if (/[0-9]/.test(operation_type)) {
    let numArr = [];
    operation_type.map((e) => {
      if (!isNaN(parseInt(e))) {
        numArr.push(parseInt(e));
      }
    });
    if (!x) {
      x = numArr[0];
    }
    if (!y) {
      y = numArr[1];
    }
  }

  if (additionSynonyms.some((v) => operation_type.includes(v))) {
    result = x + y;
    type = "addition";
  }
  if (subtractionSynonyms.some((v) => operation_type.includes(v))) {
    result = x - y;
    type = "subtraction";
  }
  if (multiplicationSynonyms.some((v) => operation_type.includes(v))) {
    result = x * y;
    type = "multiplication";
  }

  res.status(200).send({
    slackUsername,
    result,
    operation_type: type,
  });
});

// Setting the server to listen at port 3000
app.listen(PORT, function (req, res) {
  console.log(`Server is running at port ${PORT}`);
});
