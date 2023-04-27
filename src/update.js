import { useState } from "react"

// export const Add=()=>
// {
//     const[pos,setPos]=useState(myValue.who)
//     const[process,setProcess]=useState({
//         "empId":myValue.mention.empId,
//         "empName":myValue.mention.empName,
//         "empUsername":myValue.mention.empUsername,
//         "empPassword":myValue.mention.empPassword,
//         "empDesignation":myValue.mention.empDesignation,
//         "empExp":myValue.mention.empExp,
//         "empSalary":myValue.mention.empSalary
//     })
//     const track=(data)=>
//     {
//         const{name,value}=data.target
//         setProcess(
//             (old)=>
//             {
//                 return{
//                     ...old,
//                     [name]:value
//                 }
//             }
//         )
//     }


//     const regis=()=>
//     {
//         alert("Value is Updated")
//         alert(process,pos)
//         // create(process)
//         // alert("Welcome to zealous Tech Corp"+JSON.stringify(process))
//     }
//     const reset=()=>
//     {
//         alert("Rejected......")
//     }
//     return(
//         <>
//         <div id="Emp" className="container-fluid" >
//             <h1 className="text-inf0 text-uppercase text-center font-monospace">REGISTER</h1>
//             <div className="row justify-content-center">
//                 <div className="col-lg-8 col-md-0 col-sm-12 shadow-lg p-3 bg-info">
//                 <div className="form group">
//                         <label>EmployeeId</label>   
//                         <input type="text"
//                         name="empId"
//                         placeholder="Employee Id"
//                         className="form-control"
//                         onChange={track}
//                         value={process.empId}
//                         />
//                     </div>
//                     <div className="form group">
//                         <label>EmployeeName</label>   
//                         <input type="text"
//                         name="empName"
//                         placeholder="EmployeeName"
//                         className="form-control"
//                         onChange={track}
//                         value={process.empName}
//                         />
                        
//                     </div>
//                     <div className="form group">
//                         <label>EmployeeUsername</label>   
//                         <input type="text"
//                         name="empUsername"
//                         placeholder="Employee Username"
//                         className="form-control"
//                         onChange={track}
//                         value={process.empUsername}
//                         />
//                     </div>
//                     <div className="form group">
//                         <label>EmployeePassword</label>   
//                         <input type="text"
//                         name="empPassword"
//                         placeholder="EmployeePassword"
//                         className="form-control"
//                         onChange={track}
//                         value={process.empPassword}
//                         />
//                     </div>
//                     <div className="col-md-6 col-sm-12">
//                                 <label>Employee Designation</label>
//                                 <select name="empDesignation"
//                                 onChange={track}
//                                 value={process.empDesignation}
//                                  className="form-select me-5">
//                                     <option>Select Designation</option>
//                                     <option>Java Full Stack Developer</option>
//                                     <option>Python Full Stack Developer</option>
//                                     <option>C &C# Developer</option>
//                                     <option>AndroidDeveloper</option>
//                                     <option>Other</option>
//                                 </select>
//                             </div>
//                     <div className="form group">
//                         <label>EmployeeExp</label>   
//                         <input type="text"
//                         name="empExp"
//                         placeholder="EmployeeExp"
//                         className="form-control"
//                         onChange={track}
//                         value={process.empExp}
//                         />
//                     </div>
//                     <div className="form group">
//                         <label>EmployeeSalary</label>   
//                         <input type="text"
//                         name="empSalary"
//                         placeholder="EmployeeSalary"
//                         className="form-control"
//                         onChange={track}
//                         value={process.empSalary}
//                         />
//                     </div>
//                     <div className="row justify-content-around mt-4">
//                         <button className="btn btn-outline-success col-3 ms-3" onClick={regis} >Update</button>
//                         <button className="btn btn-outline-danger col-3 me-3" onClick={reset} type="reset" value="Reset" >Reset</button>
//                     </div>
//                 </div>
//                 </div>
//                 </div>
//         </>
//     ); 
// }