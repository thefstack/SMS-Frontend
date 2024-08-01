import React, { useState } from "react";
import styled from "styled-components";
import { TextField } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { useTeacherContext } from "../../Context/teacherContext";
import { Link } from "react-router-dom";

const AddTeacher = () => {
  const {isLoading,setIsAdding,addTeacher, isAdded}=useTeacherContext()
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    gender: 'female',
    father_name: '',
    mother_name: '',
    guardian_name: '',
    phone1: '',
    phone2: '',
    religion: '',
    category: '',
    village: '',
    pincode: '',
    landmark: '',
    aadhar: '',
    email: ''
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
    if (!formData.dob) newErrors.dob = 'Date of Birth is required';
    if (!formData.father_name) newErrors.father_name = 'Father Name is required';
    if (!formData.mother_name) newErrors.mother_name = 'Mother Name is required';
    if (!formData.phone1) newErrors.phone1 = 'Phone Number is required';
    if (!formData.religion) newErrors.religion = 'Religion is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.village) newErrors.village = 'Village is required';
    if (!formData.pincode) newErrors.pincode = 'Pincode is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    console.log("Form submitted")
    addTeacher(formData)
  }
  

  if(isLoading){
    return <>...Loading</>
  }

  return (
    <Wrapper>
    {isAdded>=202400 && <div className="response">id: {isAdded}</div>}
      <form onSubmit={handleSubmit} className="form">
        <h1>Teacher</h1>
        <TextField
          className="input"
          id="outlined-basic"
          label="Full Name"
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
        <TextField
          className="input"
          id="outlined-basic"
          label="DOB (yyyy-mm-dd)"
          variant="filled"
          size="small"
          name="dob"
          style={{ background: "#FAE6D5" }}
          required
          value={formData.dob}
          onChange={handleChange}
          error={!!errors.dob}
          helperText={errors.dob}
        />
        <FormControl className="input-radio">
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            row="true"
            name="gender"
            defaultValue="Female"
            value={formData.gender}
          onChange={handleChange}
          >
            <FormControlLabel
              value="Female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="Male" control={<Radio />} label="Male" />
            <FormControlLabel value="Other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>

        <TextField
          className="input"
          id="outlined-basic"
          label="Father Name"
          variant="filled"
          size="small"
          name="father_name"
          style={{ background: "#FAE6D5" }}
          required
          value={formData.father_name}
          onChange={handleChange}
          error={!!errors.father_name}
          helperText={errors.father_name}
        />
        <TextField
          className="input"
          id="outlined-basic"
          label="Mother Name"
          variant="filled"
          size="small"
          name="mother_name"
          style={{ background: "#FAE6D5" }}
          required
          value={formData.mother_name}
          onChange={handleChange}
          error={!!errors.mother_name}
          helperText={errors.mother_name}
        />
        <TextField
          className="input"
          id="outlined-basic"
          label="Phone Number"
          variant="filled"
          size="small"
          name="phone1"
          style={{ background: "#FAE6D5" }}
          required
          value={formData.phone1}
          onChange={handleChange}
          error={!!errors.phone1}
          helperText={errors.phone1}
        />
        <TextField
          className="input"
          id="outlined-basic"
          label="Alternate Phone Number"
          variant="filled"
          size="small"
          name="phone2"
          style={{ background: "#FAE6D5" }}
          value={formData.phone2}
          onChange={handleChange}
        />
        <FormControl fullWidth className="input">
          <InputLabel id="demo-simple-select-label">Religion</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            label="Religion"
            name="religion"
            value={formData.religion}
          onChange={handleChange}
          error={!!errors.religion}
          >
            <MenuItem value="Hindu">Hindu</MenuItem>
            <MenuItem value="Muslim">Muslim</MenuItem>
            <MenuItem value="Sikh">Sikh</MenuItem>
            <MenuItem value="Jain">Jain</MenuItem>
            <MenuItem value="Buddhist">Buddhist</MenuItem>
          </Select>
          {errors.religion && <p className="error-text">{errors.religion}</p>}
        </FormControl>

        <FormControl fullWidth className="input">
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            label="Category"
            value={formData.category}
          onChange={handleChange}
          name="category"
          error={!!errors.category}
          >
            <MenuItem value="General">General</MenuItem>
            <MenuItem value="OBC">OBC</MenuItem>
            <MenuItem value="SC">SC</MenuItem>
            <MenuItem value="ST">ST</MenuItem>
            <MenuItem value="EWS">EWS</MenuItem>
          </Select>
          {errors.category && <p className="error-text">{errors.category}</p>}
        </FormControl>

        <TextField
          className="input"
          id="outlined-basic"
          label="Village"
          variant="filled"
          size="small"
          name="village"
          style={{ background: "#FAE6D5" }}
          required
          value={formData.village}
          onChange={handleChange}
          error={!!errors.village}
          helperText={errors.village}
        />
        <TextField
          className="input"
          id="outlined-basic"
          label="Pincode"
          variant="filled"
          size="small"
          name="pincode"
          style={{ background: "#FAE6D5" }}
          required
          value={formData.pincode}
          onChange={handleChange}
          error={!!errors.pincode}
          helperText={errors.pincode}
        />
        <TextField
          className="input"
          id="outlined-basic"
          label="Landmark"
          variant="filled"
          size="small"
          name="landmark"
          style={{ background: "#FAE6D5" }}
          value={formData.landmark}
          onChange={handleChange}
        />
        <TextField
          className="input"
          id="outlined-basic"
          label="Aadhar"
          variant="filled"
          size="small"
          name="aadhar"
          style={{ background: "#FAE6D5" }}
          value={formData.aadhar}
          onChange={handleChange}
        />
        <TextField
          className="input"
          id="outlined-basic"
          label="Email"
          name="email"
          variant="filled"
          size="small"
          style={{ background: "#FAE6D5" }}
          value={formData.email}
          onChange={handleChange}
        />
        <Button variant="contained" type="submit">Submit</Button>
      </form>
      <Button 
      variant="contained" 
      className="back-btn">
        <Link to="/admin/teacher" style={{textDecoration:"none", color:"#fff"}}
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

export default AddTeacher;
