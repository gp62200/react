import React, { useState } from 'react'
import login1 from "../img/login1.png"
import logo2 from "../img/logo2.png"
import tric from "../img/tric.png"
import './login.css';
import background1 from "../img/background1.jpg";
import { useNavigate,Link } from 'react-router-dom';
import axios from "axios";
// import './responsive.css';
export default function Signup() {
    const history = useNavigate();
    const [email, setEmail] = useState("")
    // const [pass,setPassword]=useState("")
    const [data, setData] = useState("")
    const [password, setPassword] = useState("");

    // const togglePassword=()=>{
    //   setPasswordShown(!passwordShown);
    // }
    // const submitThis=()=>{
    //     const info={email:email,pass:passwordShown}; 
    //     setData([info]);
    // }

    const validateForm = () => {
        return email.length > 0 && password.length > 0;
    }

    // const media=()=>{.

    //   #leftsidebar {width: 200px; float: left;}
    //   #main {margin-left: 216px;}
    // }

    async function submit(e) {
        e.preventDefault();

        try {
            await axios
                .post("http://localhost:8000/signup", {
                    email,
                    password,
                })
                .then((res) => {
                    if ((res.data == "exist")) {
                        alert("user already exist");
                        // history("/home",{state:{id:email}})
                    }
                    else if ((res.data == "notexist")) {
                        history("/", { state: { id: email } });
                    }
                });
        } catch (e) {
            alert("wrong details");
            console.log(e);
        }
    }

    return (


        <div className='login' style={{ backgroundImage: `url(${background1})` }}>
            <div className='outDiv' >
                <div className='leftImageDiv'>
                    <div >
                        <img src={logo2} alt="logo2id" height={250} width={540} />
                    </div>
                    <div>
                        <img src={tric} alt="tric" height={350} width={680}></img>
                    </div>
                </div>
                <div className='rightImageDiv'>
                    <div className='outerDiv'  >

                        <div className='rightDiv'>
                            <div className='leftDiv' >
                                <img src={login1} alt="login1" />

                            </div>
                            <form className="rightInnerDiv" >
                                <h1>signup Form</h1>
                                <div>
                                    <label>Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>&nbsp;
                                    <input type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                                </div><br />
                                <div>
                                    <label> Password:</label>&nbsp;&nbsp;
                                    <input type="password" name="pass" id="pass" value={password} onChange={(e) => setPassword(e.target.value)}></input>

                                </div><br />
                                <button type='submit' disabled={!validateForm()} onClick={submit}>signup</button>
                                <br />
                                <p> OR</p>
                                <Link to="/">Login</Link>
                                {/* <button onClick={togglePassword}>show password</button> */}
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

