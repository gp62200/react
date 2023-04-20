import { Outlet, Link ,useLocation} from "react-router-dom";
import Navbar from "./navbar/Navbar";
import './Layout.css'
const Layout = () => {
    const location =useLocation()
  return (
    <>
        
      <nav>
      
        <ul>
        <h1 className='head'>Desai Infra Project(India) Pvt.Ltd.</h1>
        <hr/>
           <li>
            <Link to="/payroll">Payroll</Link>
          </li>
          <li>
            <Link to="/payroll/master">Master</Link>
          </li>
          <li>
            <Link to="/payroll/transaction">Transaction</Link>
          </li>
          <li>
            <Link to="/payroll/reports">Reports</Link>
          </li>
        </ul>
      </nav>
      {/* <h1>Hello {location.state.id}  and welcome to Payroll Page</h1> */}
      <Outlet />
      
    </>
  )
};

export default Layout;