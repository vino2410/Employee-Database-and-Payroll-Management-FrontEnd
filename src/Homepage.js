import { useState, useEffect } from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { FetchExact, list, remove } from "./MyEmployeDetails"
import {Register} from "./EmployeeDetails"
import { MyDetails, myDetails, Reading } from "./Read"
import { Add } from "./update"
import { Container, Nav, Navbar, NavLink } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.json"
import { onQuit, unLoadEmp } from "./Connect"

export const Homepage=()=>
{
    return(
      <>
      <Navbar className="navbar" bg="dark" variant="dark" >
        <Container>
        <div className="col-1">
            <img src="https://www.shutterstock.com/image-vector/group-realistic-square-logo-element-260nw-286579427.jpg" height="90px" />
        </div>
        <div className="row justify-content-around col-3">
          <Navbar.Brand href="/" className=""><h5 className="text-light text-center">GROUP BUSINESS</h5></Navbar.Brand>
          </div>
          <Nav className="ms-auto">
                         <Nav.Link href="/view" className="text-light"><h6>PAYSLIPS</h6></Nav.Link>
                            <Nav.Link href="/short" className="text-light"><h6>SHORTLIST</h6></Nav.Link>
                            <Nav.Link href="/ups" className="text-light"><h6>UPDATE DETAILS</h6></Nav.Link>
                            <button className="btn btn-danger ms-2" onClick={async()=>{
                                const d = await onQuit()
                                alert(d.data)
                            }}>
                                <i class="bi bi-door-open-fill"></i>Quit Job
                            </button>
                            
                            <button className="btn btn-dark ms-3" onClick={async()=>{
                                //alert("Button called")
                                const d = await unLoadEmp()
                                alert(d.data)
                            }}>
                                LOGOUT
                            </button>
                          </Nav>
                       </Container>
                  </Navbar>
                        
  </>
);
}
