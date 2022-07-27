import { useState } from "react";
import axios from "axios"
import './Login.css'
import Register from './Register';
import { Route, Link, useNavigate } from 'react-router-dom'
function Login(){
    const data = {};
    const [email, setEmail] = useState("")
    const [pwd, SetPwd] = useState("")
    
    const navigate = useNavigate();
    const loginpage= ()=>{
        
    }
    const handelLogin = ()=>{
        data.email = email;
        data.password = pwd
        axios
        .post("https://crmv1.mmt64.xyz/api/v1/login", data)
        .then(res => {
            localStorage.setItem("tokan", res.data.data.authorization)
            navigate("/profile")
        })
        .catch(err => alert("Email or password is not valid"));

    }
    return <>
    <div className="header">
    <div><h1>User Login</h1></div>
    <div>
        <p className="labeltext">Name:</p>
        <input type="text" placeholder="Enter email id" onChange={(e)=>{
            setEmail(e.target.value)
        }}></input> </div>
    <div> 
       <p className="labeltext"> Password</p>
        <input type="text" placeholder="Enter Password" onChange={(e)=>{
        SetPwd(e.target.value)
    }}></input></div>
    <div className="btndiv">
        <button className="button1" onClick={handelLogin}>Submit</button>
    </div>
    <div className="footer">New user Click here
    <button onClick={()=>{
       navigate('/')
        }}>Register</button>
    </div>
    </div>
    </>
}

export default Login;