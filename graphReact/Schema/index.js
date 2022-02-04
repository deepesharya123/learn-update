const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = graphql;

const {USER_LIST,USER_LIST2} = require('./Queries/User');
 const {USER_ADD} = require('./Mutations/User');
const RootQuery = new GraphQLObjectType({
  name: "xyz",
  fields: {
    userList: USER_LIST,
    codeimprove:USER_LIST2
  },
});

const Mutation = new GraphQLObjectType({
    name:"mutation",
    fields:{
      createUser:USER_ADD,
      // updateUser:UPDATE_USER
    }
})

// RootQuery
module.exports = new GraphQLSchema({ query: RootQuery, mutation:Mutation });
