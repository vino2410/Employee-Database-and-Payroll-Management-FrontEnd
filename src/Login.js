import { useState } from "react"
import { loadEmp } from "./Connect"
import { Register } from "./EmployeeDetails"



export const Login=()=>{

    const[seeView,setSeeView]=useState(false)

    const[user,setUser]=useState({
        "username":"",
        "password":""
    })

    const onPerform=(eve)=>{
        const{name,value}=eve.target
        setUser((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }
    return(
        <>
            {(seeView)?
            <>
                {alert("new will call")}
                <Register/>
            </>
            :
            <>
                <div className="Auth-form-container">
                    <div method="post" className="Auth-form">
                        <div className="Auth-form-content">
                           <h3 className="Auth-form-title">Login</h3>
                             <div id="group" className="form group">
                                <label>Username</label>
                                <input type="text" onChange={onPerform} value={user.username} name="username" placeholder="Username" className="form-control" />
                            </div>
                            <br/>
                            <div id="group" className="form group">
                                <label>Password</label>
                                <input type="password" onChange={onPerform} value={user.password} name="password" placeholder="Password" className="form-control" />
                            </div>
                            <div id="group1" className="row justify-content-around mt-3">
                                <button className="col-4 btn btn-outline-success" onClick={async()=>{
                                    const t = await loadEmp(user)
                                    alert(t.data)
                                    window.location.assign("/")
                                }}>
                                    <i class="bi bi-box-arrow-in-right"></i>Login
                                </button>
                                <button className="col-4 btn btn-outline-danger" type="reset">
                                    <i class="bi bi-x-circle-fill"></i>  Cancel
                                </button>
                            </div>
                            <div id="group2" className="row justify-content-center">
                            <button className="col-4 btn btn-outline-primary mt-3" onClick={()=>{
                                setSeeView(true)
                            }}>New User</button>
                            </div>
                        </div>
                    </div>
                </div>
             
            
          
            </>
            }
        </>

    )
}
 