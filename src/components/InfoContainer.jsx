import React from 'react'
import styled from 'styled-components';
import "../common.css"

const InfoContainer = (props) => {
  return (
    <Wrapper>
      <div className="statsCont"></div>
    </Wrapper>
  )
}

const Wrapper=styled.section`

.statsCont{
    width: 300px;
    height: 200px;
    background-color: rgba(184, 183, 183, 0.274);
    border-radius: 15px;
    box-shadow: 5px 5px 15px #a0a0a0b5;
}
@media(max-width:450px){
    .statsCont{
        width: 150px;
        height: 150px;
    }
}

`;

export default InfoContainer
