import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Register } from './EmployeeDetails';
import { Homepage } from './Homepage';
import { ViewSlips } from './Slips';
import { NewPaySlip } from './NewSlip';
import { Login } from './Login';
import { Ask } from './shortlist';
import { Profile } from './ProfileUpdate';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import { Homepage2 } from './Homepage2';

function App() {
  return (
    <>
     {(sessionStorage.getItem("user"))?
      <>
        <BrowserRouter>
          <Homepage/>
          <Routes>
            {/* <Route path="create" exact element={<Register/>} /> */}
            <Route path='' exact element={<Homepage2/>} />
            <Route path="view" exact element={<ViewSlips/>} />
            <Route path="CreateSlip" exact element={<NewPaySlip/>} />
            <Route path="short" exact element={<Ask/>} />
            <Route path="ups" exact element={<Profile/>} />
          </Routes>
        </BrowserRouter>
      </>:
      <>
        <Login/>
      </>
      }
   
    </>
  );
}

export default App;
