import axios from "axios";

const link="http://localhost:8080";


export const getDetails=async()=>{
    const t = await axios.get(`${link}/vinod/${sessionStorage.getItem('employee')}`,{
        headers:{
            "Authorization":`Basic ${sessionStorage.getItem('user')}`
        }
    })
    return t
}

export const unLoadEmp=async()=>{
    sessionStorage.removeItem("user")
    sessionStorage.removeItem("employee")
    window.location.assign("/")
    return
}

export const onQuit=async()=>{
    const t=await axios.delete(`${link}/vinod/Delete/${sessionStorage.getItem('employee')}`,{
        headers:{
            "Authorization":`Basic ${sessionStorage.getItem('user')}`
        }
    })
    sessionStorage.removeItem("user")
    sessionStorage.removeItem("employee")
    return t
}

export const onUpdate=async(obj)=>{
    const t = await axios.put(`${link}/vinod/updating`,obj,{
        headers:{
            "Authorization":`Basic ${sessionStorage.getItem('user')}`
        }
    })
    return t
}

export const onHike=async()=>{
    const t = await axios.put(`${link}/vinod/updated/${sessionStorage.getItem('employee')}`,{
        headers:{
            "Authorization":`Basic ${sessionStorage.getItem('user')}`
        }
    })
    return t
}
export const onFilter=async(obj)=>{
    alert(obj.start+" "+obj.end+" "+sessionStorage.getItem('employee'))
    const t = await axios.get(`${link}/vinod/datem/${sessionStorage.getItem('employee')}/${obj.start}/${obj.end}`,{
        headers:{
            "Authorization":`Basic ${sessionStorage.getItem('user')}`
        }
    })
    alert(t.data)
    return t
}
export const addSlip=async(slip)=>{
    const t = await axios.post(`${link}/vinod/createslip/${sessionStorage.getItem('employee')}`,slip,{
        headers:{
            "Authorization":`Basic ${sessionStorage.getItem('user')}`
        }
    })
    return t
}

export const loadSlips=async()=>{
    //alert("received employee "+sessionStorage.getItem("employee"))
    //const y=JSON.parse(sessionStorage.getItem("employee"))
    //console.log(y)
    const t = await axios.get(`${link}/vinod/fetch/${sessionStorage.getItem('employee')}`,{
        headers:{
            "Authorization":`Basic ${sessionStorage.getItem('user')}`
        }
    })
    //alert(JSON.stringify(t.data))
    return t;
}
export const loadEmp=async(obj)=>{
    try{
        const txt=obj.username+":"+obj.password
        const token=btoa(txt)
        const t = await axios.get(`${link}/vinod/${obj.username}`,{
            headers:{
                "Authorization":`Basic ${token}`
            }
        })
        if(t.data)
        {
            sessionStorage.setItem("employee",obj.username)
            sessionStorage.setItem("user",token)
            return t
        }
    }
    catch(err){
        alert("invalid")
    }
}

export const joins=async(object)=>
 {
    const temp=await axios.post(`${link}/vinod/newone`,object)
    alert(JSON.stringify(temp.data)+"has been added in backend")
    return temp;
 }