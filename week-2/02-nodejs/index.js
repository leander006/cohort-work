const express = require("express");

const fs = require("fs");
const z = require("zod");
const app = express();

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
});

app.get("/", (req, res) => {
  //   if (!schema(req.body)) {
  res.json(schema(req.body));
  //   }
});
app.get("/files", (req, res) => {
  fs.readdir("./", function (err, files) {
    if (err) {
      return res.status(404).json("Something went wrong");
    }
    res.status(200).json({
      files,
    });
  });
});

app.get("/files/:filename", (req, res) => {
  const name = req.params.filename;
  fs.readFile(name, "utf-8", function (err, file) {
    if (err) {
      res.status(404).json("Something went wrong", err);
    } else {
      res.status(200).json({
        file,
      });
    }
  });
});

// global catches

app.use(function (err, req, res, next) {
  res.json({
    msg: "Something went wrong",
  });
});
app.listen(3001, () => {
  console.log("File server running on 3001");
});
