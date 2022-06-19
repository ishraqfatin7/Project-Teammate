const express = require("express");
const app = express();
//const port = process.env.PORT || 5000;

const port = 5000;

app.get("/", (req, res) => {
  res.send("TeamMate server is online");
});
app.listen(port, () => {
  console.log("Listening to Port: ", port);
});
