import React from 'react'
import styled from 'styled-components';
import "../common.css"
import AddStudent from './Add/AddStudent';

const singleView = (props) => {
  
  return (
    <Wrapper>
      <div className='single-view'><AddStudent id={props.id}/></div>
    </Wrapper>
  )
}

const Wrapper=styled.div`
position: absolute;
    top: 0;
    left:0;
    background-color: #edd8c1c7;
    width:100%;
    min-height:100vh;
    overflow:scroll;

    .single-view{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin-top: 30px;
    overflow: scroll;
}

`;

export default singleView
