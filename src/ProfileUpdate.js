import { useEffect, useState } from "react"
import { getDetails, loadEmp, onUpdate } from "./Connect"

export const Profile=()=>{
    const[process,setProcess]=useState({
        "empId":0,
        "empName":"",
        "username":"",
        "password":"",
        "empDesignation":"",
        "empExp":"",
        "empSalary":0
    })

    const callLoad=async()=>{
        const t = await getDetails()
        setProcess(t.data)
    }

    useEffect(()=>{
        callLoad()
        alert(JSON.stringify(process))
    },[])

    const track=(data)=>
    {
        const{name,value}=data.target
        setProcess(
            (old)=>
            {
                return{
                    ...old,
                    [name]:value
                }
            }
        )
    }

    const regis=async()=>{
        const yet=await onUpdate(process);
        alert(yet.data)
        window.location.assign("/")
      
    }
    const reset=()=>
    {
        alert("rejected......")
    }
    return(
        <>
       <div className="upd-form-container">
                    <div method="post" className="upd-form">
                        <div className="upd-form-content">
                           <h3 id="updTitle" className="upd-form-title">EMPLOYEE UPDATING FORM</h3>
                            <div id="update" className="form group">
                                <label>Employee ID</label>
                                <input type="text"
                                        name=""
                                        placeholder="Employee Id"
                                        className="form-control"
                                        onChange={track}
                                        value={process.empid}/>
                            </div>
                            <br/>
                            <div id="update" className="form group">
                                <label>EmployeeName</label>
                                <input type="text"
                                name="empName"
                                placeholder="Name"
                                className="form-control"
                                onChange={track}
                                value={process.empName}
                                />
                            </div>
                            <br/>
                            <div id="update" className="form group">
                            <label>EmployeeUsername</label>   
                            <input type="text"
                            name="username"
                            placeholder="Username"
                            className="form-control"
                            onChange={track}
                            value={process.username}
                            />
                            </div>
                            <br/>
                            <div id="update" className="form group">
                            <label>EmployeePassword</label>   
                            <input type="text"
                            name="password"
                            placeholder="Password"
                            className="form-control"
                            onChange={track}
                            value={process.password}
                            />
                            </div>
                            <br/>
                            <div id="update" className="form group">
                            <label>Employee Designation</label>
                                <select name="empDesignation"
                                onChange={track}
                                value={process.empDesignation}
                                 className="form-select me-5">
                                    <option>Designation</option>
                                    <option>Java Full Stack Developer</option>
                                    <option>Python Full Stack Developer</option>
                                    <option>C &C# Developer</option>
                                    <option>AndroidDeveloper</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <br/>
                            <div id="update" className="form group">
                            <label>EmployeeExp</label>   
                            <input type="text"
                            name="empExp"
                            placeholder="Experiance"
                            className="form-control"
                            onChange={track}
                            value={process.empExp}
                            />
                            </div>
                            <br/>
                            <div id="update" className="form group">
                            <label>EmployeeSalary</label>   
                            <input type="text"
                            name="empSalary"
                            placeholder="Salary"
                            className="form-control"
                            onChange={track}
                            value={process.empSalary}
                            />
                            </div>
                            <div id="update1" className="row justify-content-around mt-4">
                        <button className="btn btn-outline-success col-3 ms-3" onClick={regis} >Register</button>
                        <button className="btn btn-outline-danger col-3 me-3" onClick={reset} type="reset" value="Reset" >Reset</button>
                    </div>
                        </div>
                    </div>
                </div>
       
        </>

    );
}