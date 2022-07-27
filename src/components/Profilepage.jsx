
import { Navigate, Redirect, useNavigate } from "react-router-dom";
import { useEffect } from "react";
function Profilepage(){
    const nevigter = useNavigate();
    useEffect(()=>{
        console.log(localStorage.getItem('tokan'));
        if(!localStorage.getItem('tokan'))
        {
            nevigter('/login')
        }
    },[])

    
    
    return <>
    <div>Welcome to the Profile page</div>

    <button onClick={()=>{
        localStorage.removeItem('tokan')
        nevigter('/login')
    }}>
        Logout
    </button>
    </>
}

export default Profilepage;