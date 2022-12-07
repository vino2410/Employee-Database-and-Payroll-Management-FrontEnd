import { useEffect, useState } from "react"
import { loadEmp, loadSlips, onHike } from "./Connect"

export const ViewSlips=(prop)=>{

    
    const[slips,setSlips]=useState([])

    
    const loadingRecords=async()=>{
        const t = await loadSlips()
        setSlips(t.data)
       
    }

    useEffect(()=>{
        if(prop.custom){
            setSlips(prop.custom)
        }
        else{
            loadingRecords()
        }   
    },[])
    
    return(<>
        <div className="container">
            <div id="slip" className="row justify-content-evenly mt-3">
                <a href="/CreateSlip" className="btn btn-outline-success col-2">
                    <i class="bi bi-newspaper"></i> Create New Payslip
                </a>
                <button className="btn btn-outline-secondary col-2" onClick={async()=>{
                    const s = await onHike()
                    alert(s.data)
                }}>
                    <i class="bi bi-currency-rupee"></i> Request Hike
                </button>
            </div>
                <div className="row justify-content-center mt-5">
                <div className="col-lg-8 col-md-10 col-sm-12">
                    <div className="table-responsive">
                        <table className="table table-bordered table-striped text-nowrap p-3 shadow rounded-5" cellSpacing="4px" cellPadding="4px">
                            <thead>
                                <tr id="pay">
                                    <th>Payslip id</th>
                                    <th>Payslip date</th>
                                    <th>Basic Pay</th>
                                    <th>Allowances</th>
                                    <th>TDS</th>
                                    <th>Take home</th>
                                </tr>
                            </thead>
                            <tbody>
                                {slips.map((v)=>(
                                    <tr>
                                        <td>{v.payslipid}</td>
                                        <td>{v.date}</td>
                                        <td>{v.payslipbasicsalary}</td>
                                        <td>{v.payslipAllowance}</td>
                                        <td>{v.payslipTDS}</td>
                                        <td>{v.payslipTakehome}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </>)
}