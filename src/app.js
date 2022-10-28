const express = require("express");
const mobileRouter = require("./routers/mobile");
var cors = require("cors");

require("./db/mongoose");

const port = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use(mobileRouter);

app.listen(port, () => {
  console.log("server listening on port " + port);
});
