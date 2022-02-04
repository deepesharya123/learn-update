const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = graphql;

// (typeDef)allowed to fetch the following parameters from the data , other these will give the error
const UserType = new GraphQLObjectType({
  name: "user",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    info: { type: GraphQLString },
  }),
});

var db = require('./models');
const User = db.users;

const RootQuery = new GraphQLObjectType({
  name: "xyz",
  fields: {
    codeimprove: {
      type: new GraphQLList(UserType),
      // resolver
      resolve(parent, args) {
        let data = [
          {
            id: 12,
            name: "codeimporve",
            email: "code@gmail.com",
            phone: 7894561597,
            info: "extra info 1",
          },
          {
            id: 13,
            name: "learn",
            email: "learn@gmail.com",
            phone: 7123458896,
            info: "extra info",
          },
          {
            id: 14,
            name: "react",
            email: "react@gmail.com",
            phone: 7159789456,
            info: "extra info 3",
          },
        ];
        return data;
      },
    },
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
