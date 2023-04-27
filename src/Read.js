import { useEffect, useState } from "react"
import { Card } from "react-bootstrap"
import { read } from "./MyEmployeDetails"

export const Reading=(myValue)=>
{
    const[Employee,setEmployee]=useState({
        "empId":0,
        "empName":"",
        "empUsername":"",
        "empPassword":"",
        "empDesignation":"",
        "empExp":"",
        "empSalary":0
    })
    useEffect(()=>
    {
        callReading()
    })

    const callReading=()=>
    {
        setEmployee(read(myValue.who))
    }
    return(
        <>
        <div className=" mt-3 container">
            <div className="row justify-content-center">
             <div className=" bg-info col-lg-8 col-md-10 col-sm-12 text-center">
                <div className="card-title text-primary">{Employee.empId}
                <div className="card-body">
                    <p className="text-center">{Employee.empName}</p>
                    <p className="text-center">{Employee.empUsername}</p>
                    <p className="text-center">{Employee.empPassword}</p>
                    <p className="text-center">{Employee.empDesignation}</p>
                    <p className="text-center">{Employee.empExp}</p>
                    <p className="text-center">{Employee.empSalary}</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
    );
}