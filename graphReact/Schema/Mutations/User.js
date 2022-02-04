const {GraphQLList,GraphQLInt,GraphQLString} = require('graphql')
var db = require('../../models');

const User = db.users;
const UserType = require('../TypeDefs/UserType');

module.exports.USER_ADD = {
  type: UserType,
  args:{
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    gender: { type: GraphQLString },
    status: { type: GraphQLString },
  },
  resolve(parent, args) {
      User.create({
          name:args.name,
          gender:args.gender,
          email:args.email,
          id:args.id
      })
      console.log("parent ",parent);
      console.log(args)
    return args;
  },
};
