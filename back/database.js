const path = require('path')
const fs = require('fs')


class DataBase {
    constructor(){
        this.url = path.join(__dirname,'./false_db.json')
        this.currentData = JSON.parse(fs.readFileSync(this.url))
    }

    openDB(req = null){
        this.currentData = JSON.parse(fs.readFileSync(this.url))
        if(req){
            return this.currentData
        }
    }

    saveDB(){
        fs.writeFileSync(this.url, JSON.stringify(this.currentData))
    }

    addNewUser(data, cb){
        this.openDB()
        const {name, last, blood, user, email, password} = data,
        id = Date.now()+name[0]
        let save = true
        this.currentData.users.forEach(el=>{
            if(el.email === email){
                save = false
                return cb(true, "Email already exist")
            }
        })
        if(save){
            const newUser = {
                "ïd": id,
                "name": name,
                "lastname": last,
                "bloodtype": blood,
                "usertype": user,
                "email": email,
                "password": password
            }
            this.currentData.users.push(newUser)
            this.saveDB()
            return cb(null, "Done", {id, name, last, blood, user})
        }
    }

    loginUser(data, cb){
        this.openDB()
        const {email, password} = data
        this.currentData.users.forEach(el=>{
            if(el.email === email){
                if(el.password === password){
                    return cb(null, "Done")
                }
                return cb(true, "Wrong Password")
            }
        })
        this.saveDB()
        return cb(true, "Email does not exist")
    }

}

module.exports = new DataBase()
