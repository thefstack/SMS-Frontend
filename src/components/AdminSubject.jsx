import React from 'react';
import styled from 'styled-components';
import ListSubjectView from './view/ListSubjectView';
import { useSubjectContext } from '../Context/subjectContext';
import { Outlet } from 'react-router-dom';


const AdminSubject = () => {
  const {isLoading,subjectData}=useSubjectContext();
  
  if(isLoading){
    return (<>...Loading</>)
  }
  return (
    <Wrapper>
      <ListSubjectView data={subjectData}/>
      <Outlet/>
    </Wrapper>
  )
}

const Wrapper=styled.div`
width:100%;
position:relative;
overflow:scroll;

`;

export default AdminSubject
