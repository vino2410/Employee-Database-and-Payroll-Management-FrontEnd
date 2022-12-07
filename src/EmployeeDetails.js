import { useState } from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { joins } from "./Connect"
import './Employee.css'
import { create } from "./MyEmployeDetails"


export const Register=()=>

{
    const[process,setProcess]=useState({
        "empid":0,
        "empName":"",
        "username":"",
        "password":"",
        "empDesignation":"",
        "empExp":"",
        "empSalary":0
    })
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


    const regis=async()=>
    {
        
        const yet=await joins(process);
        alert(yet.data)
        window.location.assign("/")
        
    }
    const reset=()=>
    {
        alert("Rejected......")
    }
    return(
        <>
        <div id="bar" className="bg-dark text-center">
            <h4>EMPLOYEE REGISTRATION</h4>
        </div>
       <div className="Con-form-container">
                    <div method="post" className="Con-form">
                        <div className="Con-form-content">
                           <h3 className="Con-form-title"></h3>
                            <div id="form" className="form group">
                                <label>Employee ID</label>
                                <input type="text"
                                        name=""
                                        placeholder="Employee Id"
                                        className="form-control"
                                        onChange={track}
                                        value={process.empid}/>
                            </div>
                            <br/>
                            <div id="form" className="form group">
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
                            <div id="form" className="form group">
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
                            <div id="form" className="form group">
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
                            <div id="form" className="form group">
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
                            <div id="form" className="form group">
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
                            <div id="form" className="form group">
                            <label>EmployeeSalary</label>   
                            <input type="text"
                            name="empSalary"
                            placeholder="Salary"
                            className="form-control"
                            onChange={track}
                            value={process.empSalary}
                            />
                            </div>
                            <div id="form1" className="row justify-content-around mt-4">
                        <button className="btn btn-outline-success col-3 ms-3" onClick={regis} >Register</button>
                        <button className="btn btn-outline-danger col-3 me-3" onClick={reset} type="reset" value="Reset" >Reset</button>
                    </div>
                        </div>
                    </div>
                </div>
    
        
        </>
    );
}