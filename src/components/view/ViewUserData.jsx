import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TextField } from "@mui/material";
import { useUserContext } from "../../Context/userContext";
import { useParams } from "react-router-dom";

const ViewUser = () => {
  const {isLoading, getUserById, singleUser}=useUserContext();
  const {id}=useParams();
  const [userData, setUserData] = useState({});
  
  useEffect(()=>{
    if(id){
      getUserById(id);
    }
  },[])  

  useEffect(()=>{
    setUserData(singleUser);
  },[singleUser])


  const handleSubmit=async(e)=>{
    e.preventDefault();
  }

  if(isLoading){
    return <>...Loading</>
  }

  return (
    <Wrapper>
      <form onSubmit={handleSubmit} className="form">
        <h1>User</h1>
        {Object.entries(singleUser).map(([key,value])=>(
          <TextField
          key={key}
          name={key}
          className="input"
          label={key || ""}
          variant="filled"
          size="small"
          value={userData[key] || ""}
          style={{ background: "#FAE6D5" }}
          InputProps={{readOnly:true}}
        />
        ))}
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  overflow: scroll;
  position: relative;

  .back-btn {
    background: #ee7c20;

    &:hover {
      background: #ee7c20;
    }
  }

  .form {
    background-color: #fad396;
    width: 80%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    gap: 20px;
    border-radius: 10px;
    box-shadow: 5px 5px #ee7c20;

    h1 {
      text-align: center;
    }
    .input {
      background-color: #fae6d5;
      width: 100%;
    }
    
    .btn-cont{
      display:flex;
      gap:20px;

    }
    button {
      background: #ee7c20;
    }
  }
  @media (max-width: 550px) {
    padding: 50px 20px;
    .form {
      width: 90%;
      padding: 20px;
    }
  }
  @media (max-width: 300px) {
    padding: 50px 10px;
    .form {
      h1 {
        font-size: 1rem;
      }
    }
  }
`;

export default ViewUser;
