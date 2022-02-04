const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = graphql;

const UserType = require('./TypeDefs/UserType');
var db = require('../models');
const User = db.users;

const RootQuery = new GraphQLObjectType({
  name: "xyz",
  fields: {
    userList: {
      type: new GraphQLList(UserType),
      // resolver
      resolve(parent, args) {
        let data = User.findAll();
        return data;
      },
    },
  },
});

// RootQuery
module.exports = new GraphQLSchema({ query: RootQuery });
