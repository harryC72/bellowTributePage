const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("index.html");
});

app.listen(port, () => {
  console.log(`Example listen on port ${port}`);
});
