const {Model,DataTypes} = require('sequelize');
const { database } = require('../db_connection');
const sequelize = require('../database');

class BloodType extends Model{}
BloodType.init({
    Id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:DataTypes.STRING
},{
    sequelize,
    timestamps:false,
    modelName:"bloodtype"
});

module.exports = BloodType;