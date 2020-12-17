const { Sequelize } = require('sequelize');
const { database } = require('./db_connection');

const sequelize = new Sequelize(
    database.database,
    database.username,
    database.password,{
        host:database.host,
        dialect:"mysql"
    }
);

module.exports = sequelize;


// class DataBase {
//     constructor(){
//         this.url = path.join(__dirname,'./false_db.json')
//         this.currentData = JSON.parse(fs.readFileSync(this.url))
//     }

//     openDB(req = null){
//         this.currentData = JSON.parse(fs.readFileSync(this.url))
//         if(req){
//             return this.currentData
//         }
//     }

//     saveDB(){
//         fs.writeFileSync(this.url, JSON.stringify(this.currentData))
//     }

//     addNewUser(data, cb){
//         this.openDB()
//         const {name, last, blood, user, email, password} = data,
//         userId = Date.now()+name[0]
//         let save = true
//         this.currentData.users.forEach(el=>{
//             if(el.email === email){
//                 save = false
//                 return cb(true, "Email already exist")
//             }
//         })
//         if(save){
//             const newUser = {
//                 "userId": userId,
//                 "name": name,
//                 "lastname": last,
//                 "bloodtype": blood,
//                 "usertype": user,
//                 "email": email,
//                 "password": password
//             }
//             this.currentData.users.push(newUser)
//             this.saveDB()
//             return cb(null, "Done", {id: userId, name, last, blood, user})
//         }
//     }

//     loginUser(data, cb){
//         this.openDB()
//         const {email, password} = data
//         this.currentData.users.forEach(el=>{
//             if(el.email === email){
//                 if(el.password === password){
//                     const {userId, name, last, blood, user} = el
//                     console.log("Success")
//                     return cb(null, "Success", {id: userId, name, last, blood, user})
//                 }
//                 console.log("Wrong Password")
//                 return cb(true, "Wrong Password")
//             }
//         })
//         this.saveDB()
//         console.log("Email does not exist")
//         return cb(true, "Email does not exist")
//     }

//     findUserById(clientId, cb){
//         this.openDB()
//         console.log("buscando usuario por id", clientId)
//         this.currentData.users.forEach(el=>{
//             if(el.userId === clientId){
//                 const {userId, name, last, blood, user} = el
//                 console.log("bien id", clientId)

//                 return cb(null, "User Founded.", {id: userId, name, last, blood, user})
//             }
//             else{
//                 console.log("no coincide")
//                 console.log(el.userId === clientId),
//                 console.log("el",el)
//                 console.log("el.id", el.userId)
//                 console.log("clientId", clientId)
//                 console.log("-----------------------")
//             }
//         })
//         this.saveDB()
//         return cb(true, "That id does not exist.")
//     }
// }

