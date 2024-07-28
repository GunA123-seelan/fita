import React, { useState } from 'react'
import './Login.css';
const Login = () => {
    let inital={
        user:'',
        password:''
    }
    const[inputs,setInputs]=useState(inital);    
    
    const[error,setError]=useState({user:false,password:false});

    const handleChange=(e)=>{
        // console.log(e.target.name,e.target.value);
        setInputs({...inputs,[e.target.name]:e.target.value});
        // console.log("inputs",inputs);
    }
    function loginFinal(e){
        e.preventDefault();
        console.log("submit",inputs);
        let check = {user:false,password:false};
        if(inputs.user === ""){
            check.user=true;
        }
        if(inputs.password === ""){
            check.password=true;
        }
        setError(check);
    }
  return (
    <div className='container'>
        <form onSubmit={loginFinal}>

        <div>
            <input type="text" placeholder='username' name="user" onChange={handleChange}/>
            {
                error.user ?
                <p className='err'>User Name is required</p>
                :
                ''
            }
        </div>
        <div>
            <input type="password" placeholder='password' name="password" onChange={handleChange}/>
            {
                error.password ?
                <p className='err'>Password is required</p>
                :
                ''
            }
        </div>
        <div>
            <button>Login</button>
            <p>Forget Password ?</p>
            <a href="registerForm">Sign-in</a>    
        </div>
    </form>
    </div>
  )
}

export default Login