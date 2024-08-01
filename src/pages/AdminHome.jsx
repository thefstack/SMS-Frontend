import React, { useEffect } from 'react'
import styled from 'styled-components'
import {Outlet, useNavigate } from 'react-router-dom'
import AdminHeader from '../components/AdminHeader';
import { useStudentContext } from '../Context/studentContext';
import { useUserContext } from '../Context/userContext';


const AdminHome = () => {
  const {getStudent }=useStudentContext();
  const {isLogin,getUser}=useUserContext()
  const navigate=useNavigate();
  

  useEffect(()=>{
    getUser();
  },[Outlet])
  useEffect(()=>{
    if(isLogin===-1 || isLogin===0){
      navigate("/login")
    }
    getStudent();

  },[])
  return (
    <Wrapper>
      <div className="admin-home-cont">
        <div className='admin-header-component'><AdminHeader/></div>
        <Outlet/>
      </div>
    </Wrapper>
  )
}

const Wrapper=styled.section`
width:100%;
position:relative;
height:100%;

.admin-home-cont{
    display: flex;
    width: 100%;
    height:100%;
    flex-direction: row;
    
    .admin-header-component{
      position:sticky;
      top:0;
      height:100vh;
    }
}

`;

export default AdminHome;
