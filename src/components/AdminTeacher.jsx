import React from 'react';
import styled from 'styled-components';
import {Outlet } from 'react-router-dom';
import { useTeacherContext } from '../Context/teacherContext';
import ListTeacherView from './view/ListTeacherView';

const AdminTeacher = () => {
  const {isLoading,teacherData}=useTeacherContext();

  if(isLoading){
    return (<>...Loading</>)
  }else{
    return (
      <Wrapper>
        <ListTeacherView data={teacherData}/>
        <Outlet/>
      </Wrapper>
    )
  }
 

  
}

const Wrapper=styled.div`
width:100%;
position:relative;
overflow:scroll;

`;

export default AdminTeacher
