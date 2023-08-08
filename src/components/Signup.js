import { useEffect, useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Header from "../components/Header";

function Signup() {
  const navigate = useNavigate();

  useEffect(()=>{

    let signup = localStorage.getItem('user-info');
    if (signup){
        navigate('/add')
    }
  })

    const [name,setName]=useState("");
    const [email, setEmail]=useState("");
    const[pass,setPass]=useState("");
    const history = useNavigate();
   async function Signup()
    {
        let item ={name,email,pass}
        console.warn(name,email,pass)


    
       let result =  await fetch("http://127.0.0.1:8000/api/signup",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item)

        });
        result=  await result.json();
        console.warn("result",result)
        localStorage.setItem("user-info", JSON.stringify(result));
        history("/add")
    }
  return (
    <>
    <Header />
    <div>
        
      <div className="title-page">
        <h2 className="hh">signup page</h2>
      </div>
      <div className="bb">
        <div className="wrapper">
          <div className="title">
            <span>Register User</span>
          </div>
          <form>
            <div className="row">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} required />
            </div>
            <div className="row">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Email or Phone" value={email} onChange={(e)=>setEmail(e.target.value)} required />
            </div>
            <div className="row">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" value={pass} onChange={(e)=>setPass(e.target.value)} required />
            </div>
            {/* <div class="pass">
              <a href="#">Forgot password?</a>
            </div> */}
            <Button variant="outline-success" onClick={Signup}>Signup</Button>
            {/* <div class="row button">
               
              <input type="submit" value="Signup" onClick={Signup} />
            </div> */}
            <div className="signup-link">
              Already user? <Link to="/login">Login Now</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default Signup;
