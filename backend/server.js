const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");

// const app = express();

app.use(cors());

app.get("/shop", (req, res) => {
  res.send("i am shop route");
});
app.get("*", (req, res) => {
  res.send("This is general directory");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});
