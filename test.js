const express = require("express");
// const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


app.use(express.json())

app.get("/", (req, res) => {
  res.send("hello sadik");
});

app.listen(port, () => {
  console.log(`sever is running on prot ${port}`);
});
