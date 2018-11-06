const express = require("express");
const app = express();
const fs = require("fs-extra");

app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

fs.readdir("./src/mock", (err, files) => {
  if (err) console.log(err);
  let mocks = files;
  for (let i = 0; i < mocks.length; i++) {
    let name = mocks[i].split(".")[0];
    fs.readJson(`./src/mock/${mocks[i]}`)
      .then(packageObj => {
        app.get(`/${name}`, (req, res) => res.send(packageObj));
        app.post(`/${name}`, (req, res) => res.send(packageObj));
      })
      .catch(err => {
        console.error(err);
      });
  }
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
