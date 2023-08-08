import React from "react";
import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Header from "../components/Header";

function Login()
{
  const [email, setEmail]=useState("");
  const[pass,setPass]=useState("");
  const history = useNavigate();
  useEffect(()=>{
    let login = localStorage.getItem('user-info');
    if (login){
      history('/add')
    }
  },[])
 async function Login()
  {
    const history = useNavigate();

    console.warn("data",email,pass)
    let item = {email,pass}
    let result = await fetch('http://127.0.0.1:8000/api/login',{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body:JSON.stringify(item)
    });
      result = await result.json();
      localStorage.setItem('user-info', JSON.stringify(result))
      history('/add')
    
  }
    return(
        <div>
            <Header />
            <div className="title-page">
        <h2 className="hh">Login page</h2>
      </div>
            <div class="bb">
        <div className="wrapper">
          <div className="title">
            <span>Login Form</span>
          </div>
          <form>
            <div className="row">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Email"  onChange={(e) =>setEmail(e.target.value)} />
            </div>
            <div className="row">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password"   onChange={(e) =>setPass(e.target.value)}  />
            </div>
            {/* <div className="pass">
              <a href="#">Forgot password?</a>
            </div> */}
            <button onClick={Login}>Login</button>
            <div className="signup-link">
              Not a member? <Link to="/signup">Login</Link>
            </div>
          </form>
        </div>
      </div>
        </div>
    )
}

export default Login;