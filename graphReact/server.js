const express = require("express");
const app = express();
const port = 3000;
require("./models/");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./Schema/index");
app.use(express.json());

var db = require("./models");
const User = db.users;
var root = {
  ip: "198.68.1.151",
  accesskey: "asdfasdfasdfzcxvqwerqew",
  dbConfig: db,
};

const context = async (req) => {
  console.log("HEllo"); // will be printed only if context is being use
  //   console.log("req ",req);
  console.log(req.headers.host);
  const host = req.headers.host;
  const token = "asdfasdf";
  return { host, token }; //it will return anything in the form of promise
};
app.use(
  "/graphql",
  graphqlHTTP(async (req) => ({
    schema,
    rootValue: root,
    graphiql: true,
    context: () => context(req),
  }))
);

app.listen(port, () => console.log(`Listening at port ${port}`));
