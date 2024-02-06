const express = require("express");

const app = express();
const mainRouter = require("./routes/index");
const { PORT } = require("./config/server-config");
const { connect } = require("./config/mongoSetup");

const cors = require("cors");

app.use(cors());

app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));

connect();
app.use("/api/v1", mainRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
