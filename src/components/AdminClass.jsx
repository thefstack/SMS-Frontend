import React from 'react';
import styled from 'styled-components';
import ListClassView from './view/ListClassView';
import { useClassContext } from '../Context/classContext';
import { Outlet } from 'react-router-dom';


const AdminClass = () => {
  const {isLoading,classData}=useClassContext();
  
  if(isLoading){
    return (<>...Loading</>)
  }
  return (
    <Wrapper>
      <ListClassView data={classData}/>
      <Outlet/>
    </Wrapper>
  )
}

const Wrapper=styled.div`
width:100%;
position:relative;
overflow:scroll;

`;

export default AdminClass
