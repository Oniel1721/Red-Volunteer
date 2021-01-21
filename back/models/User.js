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
    name:req.fields.name,
    email:req.fields.email,
    password:req.fields.password,
    typeUserId:req.fields.blood,
    bloodtypeId:req.fields.user,
    graphDomain:"Local"
    // birthdate:DataTypes.DATE
},{
    sequelize,
    timestamps:false,
    modelName:"user"
});

module.exports = User;