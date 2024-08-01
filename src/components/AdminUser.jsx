import React from 'react';
import styled from 'styled-components';
import ListUserView from './view/ListUserView';
import { useUserContext } from '../Context/userContext';
import { Outlet } from 'react-router-dom';


const AdminUser = () => {
  const {isLoading,userData}=useUserContext();
  
  if(isLoading){
    return (<>...Loading</>)
  }
  return (
    <Wrapper>
      <ListUserView data={userData}/>
      <Outlet/>
    </Wrapper>
  )
}

const Wrapper=styled.div`
width:100%;
position:relative;
overflow:scroll;

`;

export default AdminUser
