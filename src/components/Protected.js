import React from "react";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";


function Protected(props)
{

    const {Component} =props;
  const navigate = useNavigate();
  useEffect(()=>{

    let login = localStorage.getItem('user-info');
    if (!login){
        navigate('/signup')
    }

 
  });
    return(
        <div>
        <Component />
     
     
        </div>
    )
}

export default Protected;