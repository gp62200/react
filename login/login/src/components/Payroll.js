import React from 'react'
import { Routes, Route, BrowserRouter, useLocation, Link, Outlet } from 'react-router-dom'
import Master from './Master'
// import Navbar from './navbar/Navbar'
import Reports from './Reports'
import Transaction from './Transaction'
import Forms from './Forms'
import Layout from './Layout'
import Navbar from './navbar/Navbar'
import classes from './Payroll.css'
import './Payroll.css'
function Payroll() {
  const location = useLocation()
  return (
    <>

      {/* <nav>
      
        <ul>
        <h1 className='head'>Desai Infra Project(India) Pvt.Ltd.</h1>
        <hr/>
            
           <li>
            <Link to="/payroll/">Payroll</Link>
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
      </nav> */}
      {/* <h1>Hello {location.state.id}  and welcome to Payroll Page</h1> */}
      {/* <h1> welcome to Payroll Page</h1> */}
      {/* <Outlet /> */}
      <div className={classes.New}>
      <div className="navbar">
      <h1 className='head'>Desai Infra Project(India) Pvt.Ltd.</h1>
      <hr/>
        <a href="/payroll/master" class="active">Master</a>
        <a href="/payroll/transaction">Transaction</a>
        <a href="/payroll/reports">Reports</a>
        <a href="/payroll/forms">Forms</a>
        <div class="dropdown">
          <button class="dropbtn">Options
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="/payroll/master">Master</a>
            <a href="/payroll/transaction">Transaction</a>
            <a href="/payroll/reports">Reports</a>
            <a href="/payroll/forms">Forms</a>
          </div>
        </div>
      </div>
      <Outlet/> 
      </div> 
    </>



  )
}

export default Payroll
