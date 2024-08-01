import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useStudentContext } from "../../Context/studentContext";
import { useParams, NavLink } from "react-router-dom";

const ViewStudent = () => {
  const {isLoading, getStudentById,singleStudent,updateStudent}=useStudentContext();
  const {id}=useParams();
  const [editable,setEditable]=useState(false);
  const [studentData, setStudentData] = useState({});
  

  useEffect(()=>{
    getStudentById(id);
  },[])  

  useEffect(()=>{
    setStudentData(singleStudent);
  },[singleStudent])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(studentData!==singleStudent){
      await updateStudent(studentData,studentData.id);
    }
  }

  if(isLoading){
    return <>...Loading</>
  }

  return (
    <Wrapper>
      <form onSubmit={handleSubmit} className="form">
        <h1>Student</h1>
        {Object.entries(singleStudent).map(([key,value])=>(
          <TextField
          key={key}
          name={key}
          className="input"
          label={key || ""}
          variant="filled"
          size="small"
          value={studentData[key] || ""}
          onChange={handleChange}
          style={{ background: "#FAE6D5" }}
          InputProps={{readOnly:!editable}}
        />
        ))}
        
        <div className="btn-cont">
          {editable ? <Button variant="contained" type="submit">Save</Button> : <Button variant="contained" onClick={(e)=>{e.preventDefault();setEditable(true);}}>Edit</Button>}
        </div>
      </form>
      <Button 
      variant="contained" 
      className="back-btn">
        <NavLink to="/admin/student" style={{textDecoration:"none", color:"#fff"}}
         >Back</NavLink>
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
  overflow: scroll;
  position: relative;

  .back-btn {
    position: absolute;
    top: 50px;
    right: 30px;
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

export default ViewStudent;
