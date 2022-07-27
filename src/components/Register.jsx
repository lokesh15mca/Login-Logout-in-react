import { useState } from "react";
import axios from "axios"
import './Register.css'
import { Route, Link, useNavigate } from 'react-router-dom'
function Register(){
    const obj = {};
    const [country, setCountry] = useState();
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [pwd, setPwd] = useState();
    const [phone, setPhone] = useState();
    const [code, setCode] = useState();
    const navigate = useNavigate();
    return <>
    <div className="header">
        <div><h1>Register here</h1></div>
        <div>
        Country :<div>  <input type="text" placeholder="Enter country code" onChange={(e)=>{ setCountry(e.target.value)}}/></div>
        Email :  <div> <input type="email" placeholder="Enter email id" onChange={(e)=>{ setEmail(e.target.value)}}/></div>
        Name :     <div> <input type="text" placeholder="Enter name" onChange={(e)=>{ setName(e.target.value)}}></input></div>
        Password :   <div> <input type="text" placeholder="Enter password " onChange={(e)=>{ setPwd(e.target.value)}}/></div>
        Phone Number :   <div> <input type="text" placeholder="Enter phone number" onChange={(e)=>{ setPhone(e.target.value)}}/></div>
        Phone code :   <div> <input type="text" placeholder="Enter phone code" onChange={(e)=>{ setCode(e.target.value)}}/></div>

        </div>
        <div>
            <button className="button1" onClick={()=>{
                obj.country = country;
                obj.email = email;
                obj.name = name;
                obj.password = pwd;
                obj.phone = phone;
                obj.phoneCode = code;
                obj.promoCode="";
                obj.toAgree = 1;
                console.log(obj);
                axios
                .post("https://crmv1.mmt64.xyz/api/v1/register", obj)
                .then(res => {
                    console.log("Registered");
                    localStorage.setItem("tokan", res.data.data.authorization)
                    navigate('/profile')
                })
                .catch(err => alert("This Email id is already in use"));
                

            }}>Submit</button>
        </div>
        Click here for
        <button onClick={()=>{
       navigate('/login')
        }}>Login</button>
    
    </div>
    </>
}

export default Register;