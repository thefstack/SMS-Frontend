import React, { useState } from "react";
import styled from "styled-components";
import { TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { useSubjectContext } from "../../Context/subjectContext";
import { Link } from "react-router-dom";

const AddSubject = () => {
  const {isLoading,setIsAdding,addSubject, isAdded}=useSubjectContext()
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    class_id:'',
    teacher_id:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };


  const handleSubmit=async(e)=>{
    e.preventDefault()
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Full Name is required';
    if (!formData.class_id) newErrors.class_id = 'Full Name is required';
    if (!formData.teacher_id) newErrors.teacher_id = 'Full Name is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    addSubject(formData)
  }
  

  if(isLoading){
    return <>...Loading</>
  }

  return (
    <Wrapper>
    {isAdded>=202400 && <div className="response">id: {isAdded}</div>}
      <form onSubmit={handleSubmit} className="form">
        <h1>Subject</h1>
        <TextField
          className="input"
          id="outlined-basic"
          label="Class Name"
          variant="filled"
          size="small"
          name="name"
          style={{ background: "#FAE6D5" }}
          required
          value={formData.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
        />

        <FormControl fullWidth className="input">
          <InputLabel id="demo-simple-select-label">Class</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            label="Class"
            name="class_id"
            value={formData.class_id}
          onChange={handleChange}
          error={!!errors.class_id}
          >
            <MenuItem value="Play">PLAY</MenuItem>
            <MenuItem value="Kg">KG</MenuItem>
            <MenuItem value="LKG">LKG</MenuItem>
          </Select>
          {errors.class_id && <p className="error-text">{errors.class_id}</p>}
        </FormControl>

        <FormControl fullWidth className="input">
          <InputLabel id="demo-simple-select-label">Teacher</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            label="Teacher"
            value={formData.teacher_id}
          onChange={handleChange}
          name="teacher_id"
          error={!!errors.teacher_id}
          >
            <MenuItem value="General">General</MenuItem>
            <MenuItem value="OBC">OBC</MenuItem>
            <MenuItem value="SC">SC</MenuItem>
            <MenuItem value="ST">ST</MenuItem>
            <MenuItem value="EWS">EWS</MenuItem>
          </Select>
          {errors.category && <p className="error-text">{errors.category}</p>}
        </FormControl>

        <Button variant="contained" type="submit">Submit</Button>
      </form>
      <Button 
      variant="contained" 
      className="back-btn">
        <Link to="/admin/subject" style={{textDecoration:"none", color:"#fff"}}
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

export default AddSubject;
