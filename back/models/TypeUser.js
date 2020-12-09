const {Model, DataTypes} = require('sequelize');
const sequelize = require('../database');

class TypeUser extends Model{}
TypeUser.init({
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:DataTypes.STRING
},{
    sequelize,
    timestamps:false,
    modelName:"typeUser"
});

module.exports = TypeUser;