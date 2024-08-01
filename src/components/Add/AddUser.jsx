import React, { useState } from "react";
import styled from "styled-components";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useUserContext } from "../../Context/userContext";
import { Link } from "react-router-dom";

const AddUser = () => {
  const {isLoading,setIsAdding,addUser, isAdded}=useUserContext()
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    user_id: '',
    password:''    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };


  const handleSubmit=async(e)=>{
    e.preventDefault()
    const newErrors = {};
    if (!formData.user_id) newErrors.user_id = 'User Id is required';
    if (!formData.password) newErrors.password = 'Password is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    addUser(formData)
  }
  

  if(isLoading){
    return <>...Loading</>
  }

  return (
    <Wrapper>
    {isAdded>=202400 && <div className="response">id: {isAdded}</div>}
      <form onSubmit={handleSubmit} className="form">
        <h1>User</h1>
        <TextField
          className="input"
          label="User Id"
          variant="filled"
          size="small"
          name="user_id"
          style={{ background: "#FAE6D5" }}
          required
          value={formData.user_id}
          onChange={handleChange}
          error={!!errors.user_id}
          helperText={errors.user_id}
        />
        <TextField
          className="input"
          label="Password"
          name="password"
          variant="filled"
          size="small"
          style={{ background: "#FAE6D5" }}
          value={formData.password}
          onChange={handleChange}
          error={!!errors.password}
          helperText={errors.password}
        />
        <Button variant="contained" type="submit">Submit</Button>
      </form>
      <Button 
      variant="contained" 
      className="back-btn">
        <Link to="/admin/user" style={{textDecoration:"none", color:"#fff"}}
        onClick={()=>{setIsAdding()}}
         >Back</Link>
      </Button>
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
  position: relative;

  .back-btn {
    position: absolute;
    top: 0;
    right: 20px;
    background: #ee7c20;

    &:hover{
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
    .input-radio {
      border-radius: 10px;
      overflow: hidden;
      background-color: #fae6d5;
      padding: 5px 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
    button {
      background: #ee7c20;
    }
    .error-text {
      color: red;
      font-size: 0.75rem;
      margin: 0;
      padding:3px 15px; 
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

export default AddUser;
