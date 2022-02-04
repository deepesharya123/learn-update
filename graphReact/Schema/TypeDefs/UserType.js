const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
} = graphql;

// (typeDef)allowed to fetch the following parameters from the data , other these will give the error
const UserType = new GraphQLObjectType({
    name: "user",
    fields: () => ({
      id: { type: GraphQLInt },
      name: { type: GraphQLString },
      email: { type: GraphQLString },
      gender: { type: GraphQLString },
      status: { type: GraphQLString },
    }),
  });

  module.exports = UserType;