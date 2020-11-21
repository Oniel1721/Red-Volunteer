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
    
    closeSession(e,path="/"){
        console.log(e)
        localStorage.removeItem("userID")
        window.location.assign(window.location.origin+path)
    }
    
    redirect(path = ""){
        const wl = window.location
        if(path){
            wl.assign(`${wl.origin}${path}`)
        }
    }
    
    checkSession(success = "", fail = ""){
        const id = localStorage.getItem("userID")
        if(id){
            const data = new FormData(),
            url = this.currentUrl+'/api/user/id'
            data.append("id", id)
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
            .then((text) => {
                let json = JSON.parse(text)
                console.log("server answer",json);
                if (json.OK){
                    this.redirect(success)
                }
                else{
                    this.redirect(fail)
                } 
              })
            .catch((err) =>{
                console.log("catch fetch: ",err);
                this.redirect(fail)
            }); 
        }
        else{
            console.log("User have'nt started session.")
            this.redirect(fail)
        }
    }

    checkSignup(){
        const status = {
            OK: true, 
            msg: ""
        }
        return status
    }

    fetchSignup(){
        const $form = d.getElementById("signup"),
            data = new FormData($form),
            url = this.currentUrl+'/api/signup'
        
        
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
                this.openSession(json.user.id)
                this.redirect("/solicitante")
            }
        })
        .catch((err) =>{
          console.log(err);
        });  
    }

    async signup(){
        const status = await this.checkSignup()
        if(status.OK){
            this.fetchSignup()
        }
        else{
            console.log(`Error: ${status.msg}`)
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
