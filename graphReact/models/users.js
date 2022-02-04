const { sequelize } = require(".");

module.exports = (sequelize,DataType)=>{
    const Users = sequelize.define('users',{
        name:DataType.STRING,
        email:DataType.STRING,
        gender:DataType.STRING,
        status:DataType.STRING,
    },{
        createdAt:'created_at',
        updatedAt:'updated_at'
    })

    return Users;
}