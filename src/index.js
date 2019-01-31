const express = require("express");
const mongo = require("./mongodb");
const routes = require("./route");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
mongo.then(async client => {
  const db = await client.db("mydb");
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  routes.forEach(route => {
    route(app, db);
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
