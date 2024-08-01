import React from 'react';
import styled from 'styled-components';
import ListStudentView from './view/ListStudentView';
import { useStudentContext } from '../Context/studentContext';
import { Outlet } from 'react-router-dom';


const AdminStudent = () => {
  const {isLoading,studentData}=useStudentContext();
  
  if(isLoading){
    return (<>...Loading</>)
  }
  return (
    <Wrapper>
      <ListStudentView data={studentData}/>
      <Outlet/>
    </Wrapper>
  )
}

const Wrapper=styled.div`
width:100%;
position:relative;
overflow:scroll;

`;

export default AdminStudent
