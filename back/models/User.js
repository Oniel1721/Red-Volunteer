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
    lastname:DataTypes.STRING,
    birthDate:DataTypes.DATE,
    password:DataTypes.STRING,
    email:DataTypes.STRING,
    typeUserId:DataTypes.INTEGER,
    bloodtypeId:DataTypes.INTEGER
    // birthdate:DataTypes.DATE
},{
    sequelize,
    timestamps:false,
    modelName:"user"
});

module.exports = User;