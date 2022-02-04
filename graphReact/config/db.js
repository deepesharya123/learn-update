const Sequelize = require("sequelize");
// const sequelize = new Sequelize('DBname','username','password',{

const sequelize = new Sequelize("test", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  logging: true,
  password:'root',
  // port:3001
});

sequelize
  .authenticate()
  .then(() => console.log("Conneted "))
  .catch((e) => console.log(e));

  module.exports = sequelize;
