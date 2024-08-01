import React, { useState ,useEffect } from 'react'
import styled from 'styled-components'
import {useUserContext} from "../Context/userContext"
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
    const navigate=useNavigate()
    const {loginUser, isLogin}=useUserContext()
    const [errorLogin,setErrorLogin]=useState(false)
    const [formData,setFormData]=useState({
        username:"",
        password:""
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

    const handleSubmit=(e)=>{
        e.preventDefault();
        loginUser(formData);
    }
    const loginError=()=>{
        if (isLogin === -1) {
            setErrorLogin(true);
            const timer = setTimeout(() => {
              setErrorLogin(false);
            }, 6000);
            return () => clearTimeout(timer);
          }
          if (isLogin === 1) {
            navigate("/admin");
          }
    }
    useEffect(() => {
        loginError()
      }, [loginUser]);

  return (
    <Wrapper>
        {errorLogin && <div className="error">Please Enter Valid Credential</div>}
      <div className="loginCont">
        <form onSubmit={handleSubmit} className='loginForm'>
            <h3>Admin Login</h3>
            <label htmlFor="username">User Id</label>
            <input name='username' id='username' type="text" placeholder='username' value={formData.username} onChange={handleChange}/>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder='password' value={formData.password} onChange={handleChange}/>

            <button className='button' type='submit'>Login</button>
        </form>
      </div>
    </Wrapper>
  )
}

const Wrapper=styled.section`
display:flex;
justify-content:center;
align-items:center;
width:100%;
min-height:100vh;

.error{
    background:#FFBA82;
    box-shadow: 10px 10px #EE7C20;
    padding:5px 15px;
    position:absolute;
    top:15px;
}

.loginCont{
    display: flex;
    background:#FFBA82;
    min-width: 400px;
    width: 50%;
    justify-content: center;
    border-radius: 15px;
    box-shadow: 10px 10px #EE7C20;
}

.loginForm{
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    padding: 50px 30px;

    h3{
        text-align: center;
    }
    

    label{
        margin-top: 15px;
        text-align: center;
        font-weight: 600;
    }
    input{
        padding: 5px 15px;
        font-size: 1rem;
        border: none;
        outline: none;
        border-radius: 10px;
        width: 120%;
        height: 40px;
    }
    
}
.button{
        margin-top: 30px;
        padding: 5px 20px;
        font-size: 1.2rem;
        border-radius: 10px;
        outline: none;
        border: none;
        transition: 0.6s;
        cursor: pointer;
        text-decoration:none;
        background:#fff;
        color:#000;
        font-weight:700;
    }
    .button:hover{
        background-color: #000000c4;
        color: #fff;
    }

@media(max-width:650px){
    .loginForm{
        input{
            width: 100%;
            padding: 5px 10px;
        }
    }
    .loginCont{
        min-width: 100px;
        width: 80%;
    }
}

@media(max-width:400px){
    .loginForm{
        input{
            font-size: 0.8rem;
        }
        h3{
            font-size: 1rem;
        }
        label{
            font-size: 0.9rem;
        }
        .button{
            font-size: 1rem;
        }
    }
    .loginCont{
        min-width: 100px;
        width: 80%;
    }
}
@media(max-width:300px){
    .loginForm{
        padding: 30px 10px;
    }
    .loginCont{
        width: 90%;
    }
}



`;

export default AdminLogin
