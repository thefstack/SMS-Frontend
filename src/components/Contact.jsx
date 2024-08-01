import React from 'react'
import styled from 'styled-components';
import "../common.css"

const Contact = () => {
  return (
    <Wrapper id='contact-section'>
      <div className="contact-section">
        <h1>Contact Us</h1>
        <div className="user-info">
          <input type="text" placeholder='Full Name'/>
          <input type="text" placeholder='Email Address'/>
          <input type="text" placeholder='Phone Number'/>
          <button>Submit</button>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper=styled.div`
    padding:30px 0px;
    width:100%;
    display:flex;
    justify-content:center;
    


.sec-color{
    color:#fb9a4b;
}

.contact-section{
  display:flex;
  width:80%;
  max-width:600px;
  padding:30px 10px;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin-top:20px;
    gap: 30px;
    cursor: default;
    border:2px solid #f98629a9;
    background:#f7d5b86c;
    box-shadow: 5px 5px #f98629a9;
    border-radius:15px;
}

.contact-section{
    
    .user-info{
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 20px;
        align-items: center;
        justify-content:center;

        input{
            padding: 10px 30px;
            border-radius: 10px;
            background-color: #fbf2ea;
            border:2px solid #f98629a9;
            outline: none;
            width: 80%;
            color: #ff7300;
        }
        button{
            width: 120px;
            text-align: center;
            padding: 10px 30px;
            border-radius: 10px;
            background-color: #fbf2ea;
            border:2px solid #f98629a9;
            outline: none;
            transition: 0.5s;
            cursor: pointer;
        }
        button:hover{
            background-color: #f98629a9;
            color: #fff;
            font-weight: 600;
        }
    }
}

@media(max-width:500px){
    .contact-section{
        width:85%;
    }
}

@media(max-width:300px){
    .contact-section{
        .user-info{
            button{
                width: 100px;
            }
        }
    }
}
    

`;

export default Contact;
