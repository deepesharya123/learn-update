const {GraphQLList} = require('graphql')
var db = require('../../models');
const User = db.users;
const UserType = require('../TypeDefs/UserType');

module.exports.USER_LIST = {
  type: new GraphQLList(UserType),
  resolve: async (parent, args,context) =>{
    var myData = await context();   //retunrs promise
    console.log("myData.hosts ",myData.host)
    // console.log("context ",context())
    let data = parent.dbConfig.users.findAll();
    return data;
  },
};

module.exports.USER_LIST2 = {
  type: new GraphQLList(UserType),
  resolve(parent, args,context) {
    console.log("context ",context)
    let data = parent.dbConfig.users.findAll({where:{name:"Amar"}});
    return data;
  },
};
