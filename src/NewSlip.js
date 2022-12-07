import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { addSlip, loadEmp} from "./Connect"

export const NewPaySlip=()=>{
    const nav=useNavigate()
    const[slip,setSlip]=useState({
        "date":"",
        "payslipAllowance":0.0,
        "payslipTDS":0.0,
    })
    const hello=(eve)=>{
        const{name,value}=eve.target
        setSlip((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }

    const onAdd=async()=>{
        const t = await addSlip(slip)
        alert(t.data)
        nav("/view")
    }

    return(
        <>
        <div className="new-form-container">
                    <div method="post" className="new-form">
                        <div className="new-form-content">
                           <h3 className="new-form-title">Add PaySlip Details</h3>
                             <div id="newSlip" className="form group">
                             <label>Payslip date </label>
                             <input type="text" className="form-control" placeholder="yyyy-mm-dd" name="date" value={slip.date} onChange={hello} />
                            </div>
                            <br/>
                            <div id="newSlip" className="form group">
                            <label>Payslip tds </label>
                            <input type="text" placeholder="TDS" className="form-control" name="payslipTDS" value={slip.payslipTDS} onChange={hello} />
                            </div>
                            <div id="newSlip"  className="form group">
                            <label>Payslip allowances </label>
                            <input type="text" placeholder="allowance" name="payslipAllowance" className="form-control" value={slip.payslipAllowance} onChange={hello} /> 
                            </div>
                            <div id="newSlip1" className="row justify-content-around mt-3">
                            <button className="btn btn-outline-success col-3" onClick={()=>onAdd()}>
                                <i class="bi bi-database-add"></i>Add PaySlip
                            </button>
                            <button className="btn btn-outline-danger col-3" type="reset">
                                <i class="bi bi-x-octagon-fill"></i>Cancel
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
           
        </>
     )
}