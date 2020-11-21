const d = document,
urlDev = 'http://localhost:7000',
urlPro = '',
currentUrl = urlDev

class Session{
    constructor(){
        this.isOpen = false
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
            url = currentUrl+'/api/user/id'
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
                alert("redirect error" + fail)
                this.redirect(fail)
            }); 
        }
        else{
            console.log("User have'nt started session.")
            this.redirect(fail)
        }
    } 

}

const session = new Session()

export const handleLocalLogin = function(e){
    e.preventDefault()
    const $form = d.getElementById("login"),
        data = new FormData($form),
        url = currentUrl+'/api/login'
    
    
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
            session.openSession(json.user.id)
            session.redirect("/solicitante")
        }
    })
    .catch((err) =>{
      console.log(err);
    });      
}

export const handleLocalSignup = function(e){
    e.preventDefault()
    const $form = d.getElementById("signup"),
        data = new FormData($form),
        url = currentUrl+'/api/signup'
    
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
            session.openSession(json.user.id)
            session.redirect("/solicitante")
        }
    })
    .catch((err) =>{
      console.log(err);
    });      
}

export default session
