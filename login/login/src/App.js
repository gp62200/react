import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import axios from "axios";
import Login from './components/Login';
import background1 from "./img/background1.jpg";
import Payroll from './components/Payroll';
// import Master from './components/navbar/Master'
import Navbar from './components/navbar/Navbar'
import Master from './components/Master';
import Transaction from './components/Transaction';
import Reports from './components/Reports';
import Forms from './components/Forms';
import Signup from './components/Signup';
import Home from './components/Home';
import Layout from './components/Layout';
// import './component/responsive.css';  
function App() {
  
  return (
    <div style={{ backgroundImage:`url(${background1})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", 
    height:760,width:1520
    }}>
      

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={<Home />} />
          <Route path='/payroll' element={<Payroll/>} >
              
              <Route path="master" element={<Master/>}></Route>
                {/* <a href='reports'>reports</a> */}
              <Route path="transaction" element={<Transaction/>}></Route>
              <Route path="reports" element={<Reports/>}></Route>
              <Route path="forms" element={<Forms/>}></Route>
          </Route> 
           
          
             
        </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
