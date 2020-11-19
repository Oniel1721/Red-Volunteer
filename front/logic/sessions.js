const d = document

class Session{
    constructor(){
        this.isOpen = false
    }

    openSession(id){
        localStorage.setItem("userID", id)
        this.isOpen = true
    }
    
    closeSession(path=""){
        localStorage.removeItem("userID")
        this.isOpen = false
        if(path) this.redirect(path)
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
            url = 'http://localhost:7000/api/user/id'
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
                if (json.OK) this.redirect(success)
                else this.redirect(fail)
              })
            .catch((err) =>{
                console.log(err);
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
        url = 'http://localhost:7000/api/login'
    
    
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
        else{
            session.closeSession()
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
        url = 'http://localhost:7000/api/signup'
    
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
        else{
            session.closeSession()
        }
    })
    .catch((err) =>{
      console.log(err);
    });      
}

export default session
