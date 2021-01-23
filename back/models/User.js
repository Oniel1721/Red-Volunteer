const {Model, DataTypes} = require('sequelize');
const { database } = require('../db_connection');
const sequelize = require('../database');

class User extends Model{}
User.init({
    userId:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:DataTypes.STRING,
    email:DataTypes.STRING,
    password:DataTypes.STRING,
    typeUserId:DataTypes.INTEGER,
    bloodtypeId:DataTypes.INTEGER,
    useridDomain:DataTypes.INTEGER,
    graphDomain:DataTypes.STRING
    // birthdate:DataTypes.DATE
},{
    sequelize,
    timestamps:false,
    modelName:"user"
});

module.exports = User;