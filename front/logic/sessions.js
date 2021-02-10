export const RVDataInit=()=>{
    if(!localStorage.getItem("RVData")){
        localStorage.setItem("RVData", "{}")
    }
}

const getJSON = ()=>{
    RVDataInit()
    return JSON.parse(localStorage.getItem("RVData"))
}

const setJSON = (value)=>{
    localStorage.setItem('RVData', JSON.stringify(value))
}

export const getData = (prop = null)=>{
    if(!props) return undefined
    let json = getJSON()
    return json[prop]
}

export const setData = (prop = null, value = null)=>{
    if(!prop || !value) return undefined
    let json = getJSON()
    json[prop] = value
    setJSON(json)
}