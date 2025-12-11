import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    let Navigate=useNavigate();
    const [info,setInfo]=useState({name:"",email:"",password:""})
    const onchange=(e)=>{
        setInfo({...info,[e.target.name]:e.target.value});
    }
    const handleSubmitSignUp=async(e)=>{
        e.preventDefault();
        console.log("Signing u Up");
        const response = await fetch('http://localhost:5000/api/auth/createuser', {
            method: "POST",
            headers: {
              "content-type": "application/json",
              },
            body: JSON.stringify({ name:info.name,email:info.email,password:info.password}),
          });
          const json=await response.json();
          console.log(json);
          if(json.success){
            localStorage.setItem('token',json.authToken);
            Navigate("/getallnotes")
          }else{
            alert("Already Exists please login")
          }
    }
    
  return (
    <div className="container d-flex justify-content-center align-items-center"
      style={{ height: "90vh" }}>
      <form onSubmit={handleSubmitSignUp}>
        <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            name="name"
            required
            value={info.name}
            onChange={onchange}
            
          />
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            name="email"
            required
            value={info.email}
            onChange={onchange}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            required
            minLength={5}
            value={info.password}
            onChange={onchange}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
