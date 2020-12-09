const User = require('./models/User');
const BloodType = require('./models/BloodType');
const TypeUser = require('./models/TypeUser');
// import { sequelize } from './database';


// UserTypeUser = sequelize.define('User_TypeUSer',{
//     role:Sequelize.STRING
// });
User.belongsTo(TypeUser);
TypeUser.hasMany(User);

User.belongsTo(BloodType);
BloodType.hasMany(User)
