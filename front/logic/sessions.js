import {Redirect} from 'react-router-dom'

const d = document
class Session{
    constructor(){
        this.isOpen = false
        this.urlDev = 'http://localhost:7000'
        this.urlPro = ''
        this.currentUrl = this.urlDev

    }

    openSession(id){
        console.log("adding id to session: "+id)
        localStorage.setItem("userID", id)
        this.isOpen = true
    }
    
    closeSession(){
        localStorage.removeItem("userID")
    }

    userDataInit(){
        if(!localStorage.getItem("userData")){
            localStorage.setItem("userData", "{}")
        }
    }

    saveUserData(key = "", value = ""){
        if(key && value){
            this.userDataInit()
            let userData = JSON.parse(localStorage.getItem("userData"))
            if(key === 'name'){
                value.trim()
            }
            userData[key] = value
            localStorage.setItem("userData", JSON.stringify(userData))
        }
    }

    getUserData(){
        this.userDataInit()
        return JSON.parse(localStorage.getItem("userData"))
    }
    
    redirect(path = ""){
        const wl = window.location
        if(path){
            wl.assign(`${wl.origin}${path}`)
        }
    }


    checkSignup(userData){
        const $form = document.getElementById("signup")
        let status = {
            OK: true, 
            msgs: ""
        }
        return status
    }

    fetchSignup(userData){
        const data = new FormData(),
            url = this.currentUrl+'/api/signup'
        for(let prop in userData){
            data.append(prop, userData[prop])
        }
        fetch(url, {
            method: "POST",
            body: data
        })   
        .then((response) =>{
          if(response.ok) {
              return response.text()
          } else {
              throw "Error in fetch";
          }
        })
        .then((text)=> {
          let json = JSON.parse(text)
          console.log("server answer",json);
          if(json.OK){
                this.openSession(json.userId)
                this.redirect("/solicitante")
            }
            else{
                console.log(json.msg)
            }
        })
        .catch((err) =>{
          console.log(err);
        });  
    }

    async signup(){
        let userData = this.getUserData()
        const status = await this.checkSignup(userData)
        if(status.OK){
            console.log('listo para el fetch')
            this.fetchSignup(userData)
        }
        else{
            console.log('Error: ', status.msgs)
        }
    }

    checkLogin(){
        const status = {
            OK: true,
            msg: ""
        }
        return status
    }

    fetchLogin(){
        const $form = d.getElementById("login"),
            data = new FormData($form),
            url = this.currentUrl+'/api/login'

        fetch(url, {
            method: "POST",
            body: data
        })   
        .then((response)=> {
          if(response.ok) {
              return response.text()
          } else {
              throw "Error in fetch";
          }
        })
        .then((text)=>{
            let json = JSON.parse(text)
            console.log("server answer",json);
            if(json.OK) {
                this.openSession(json.user.id)
                this.redirect("/solicitante")
            }
        })
        .catch((err) =>{
          console.log(err);
        }); 
    }

    async login(){
        const status = await this.checkLogin()
        if(status.OK){
            this.fetchLogin()
        }
        else{
            console.log(`Error: ${status.msg}`)
        } 
    }
}

const session = new Session()

export default session
