import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer">
        <p>@copyright 2024</p>
      </div>
    </Wrapper>
  )
}

const Wrapper=styled.div`
    width:100%;
    height:70px;
    background-color:#FAE6D5;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:30px;
`;

export default Footer
