import React from 'react'
import {Link ,NavLink, Outlet} from 'react-router-dom';
// import {Master} from './Master';
// import Reports from './Reports';
// import Transaction from './Transaction'
// import Payroll from '../Payroll';
// import Master from './Master';
import './navbar.css'
// import React from 'react'

function Navbar() {
  return (
      <div>
        
          
      
      <nav>
        
        {/* <Link to="/master">Master</Link>
        
        <Link to="/transaction">Transaction</Link>
        <Link to="/reports">Reports</Link>
        <Link to="/forms">Forms</Link> */}

        <ul  className='topnav'>
            {/* <li color='blue'>Desai infra Project(India) Pvt.Ltd.</li> */}
            <h1 className='head'>Desai Infra Project(India) Pvt.Ltd.</h1>
            <hr/>
            <li><a class="active" href="/payroll">Payroll</a></li>
            <li><NavLink to="/transaction">Transaction</NavLink></li>
            <li><Link to="/master">Master</Link></li>
            <li><a href="/reports">Reports</a></li>
            <li><Link to="/payroll/forms">Forms</Link></li>
            <li><a href="/leave">Leave</a></li>
            <li><a href="/admin">Admin</a></li>
            <li><a href="/user">User</a></li>
            <li><a>logout</a></li>
        </ul>
      </nav>
        {/* <Outlet/> */}
      </div>
    
  )
}

export default Navbar

