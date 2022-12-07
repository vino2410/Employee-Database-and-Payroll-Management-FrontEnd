import { useState } from "react"
import { onFilter } from "./Connect"
import { ViewSlips } from "./Slips"

export const Ask=()=>{

    const[gathered,setGathered]=useState([])

    const[dates,setDates]=useState({
        "start":"",
        "end":""
    })

    const collect=(eve)=>{
        const{name,value}=eve.target
        setDates((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }

    const onFind=async()=>{
        const hai=await onFilter(dates)
        setGathered(hai.data)
    }

    return(
        <>
        {(gathered.length>0)?
            <>
                <ViewSlips custom={gathered} />
            </>
            :
            <>
             <div className="short-form-container">
                    <div className="short-form">
                        <div className="short-form-content">
                           <h3 id="sort" className="short-form-title">PAYSLIP SHORTLIST</h3>
                             <div id="shortlist" className="form group">
                             <label>Start Date</label>
                            <input type="text" name="start" value={dates.start} onChange={collect} placeholder="YYYY-MM-DD" className="form-control" />
                            </div>
                            <br/>
                            <div id="shortlist" className="form group">
                            <label>End Date</label>
                            <input type="text" name="end" value={dates.end} onChange={collect} placeholder="YYYY-MM-DD" className="form-control" />
                            </div>
                            <div id="newSlip1" className="row justify-content-around mt-3">
                            <button className="col-2 btn btn-outline-success col-3" onClick={()=>onFind()}>
                                <i class="bi bi-filter-circle-fill"></i>ShortList
                            </button>
                            <button className="col-2 btn btn-outline-danger col-3" type="reset">
                                <i class="bi bi-sign-turn-left"></i>Cancel
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
           
         </>
        }
        </>
    )
}