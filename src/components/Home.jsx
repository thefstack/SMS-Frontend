import React from 'react'
import styled from "styled-components"
import "../common.css"
import ImageCrousel from './ImageCrousel'
import { Link } from 'react-router-dom';
import {motion } from 'framer-motion';


const Home = () => {
    const var1={
        initialLeft:{
            x:-100,
            opacity:0
        },
        left:{
            x:0,
            opacity:1,
            transition:{delay:0.3,}
        },
        initialRight:{
            x:100,
            opacity:0,

        },
        right:{
            x:0,
            opacity:1,
            transition:{delay:0.3,}
        }
    }
  return (
    <Wrapper>
      <div className="carouselCont">
      <ImageCrousel/>
        <h1 className='schoolName'>R S Memorial <h1 className='sec-color'>&nbsp;School</h1></h1>
      </div>
      
      <div className="infoCont">
        <motion.div variants={var1} initial="initialLeft" animate="left" className="mission">
          <h2>Our <span className='sec-color'>Mission</span></h2>
          <li>Our vision is to develop well rounded, confident and responsible individuals.</li>
          <li>We are committed to providing a positive, safe and stimulating environment for children.</li>
          <li>Our focus is to provide a stimulating early learning and child care experience.</li>
          <li>Our school empowers all students to embrace learning.</li>
        </motion.div>
        <motion.div variants={var1} initial="initialRight" animate="right" className="new-info">
          <h2>News / <span className='sec-color'>Informations</span></h2>
          <Link className='li' to={"/"}>Lorem ipsum dolor sit amet.</Link>
          <Link className="li" to={"/"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. A minus qui at illo obcaecati assumenda?</Link>
        </motion.div>
      </div>
    </Wrapper>
  )
}
const Wrapper= styled.section`
display:flex;
justify-content:center;
align-items:center;
width:100%;
flex-direction:column;

.sec-color{
    color:#fb9a4b
}
.infoCont{
    display:flex;
    justify-content: space-around;
    flex-direction: row;
    width: 100%;
    margin-bottom: 20px;
    padding-top:30px;
}
.infoCont .mission{
    background-color: rgba(255, 255, 255, 0.356);
    width: 40%;
    height: fit-content;
    max-width: 500px;
    min-width: 300px;
    border-radius: 10px;
    padding: 10px 20px;
    border:2px solid #f98629a9;
    background:#f7d5b86c;
    box-shadow: 5px 5px #f98629a9
    
}
.new-info{
    background-color: rgba(255, 255, 255, 0.356);
    width: 40%;

    max-width: 500px;
    min-width: 300px;
    border-radius: 10px;
    padding: 10px 20px;
    border:2px solid #f98629a9;
    background:#f7d5b86c;
    box-shadow: 5px 5px #f98629a9
}
.infoCont .mission{

    font-size: 0.8rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 15px;



    h2{
        text-align:center;
        color: #000;
        font-size: 2.3rem;
    }
    li:last-child{
        margin-bottom: 20px;
    }
}
.new-info{
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 25px;

    .li{
        text-decoration: none;
        cursor: pointer;
        color:#3498db
        
    }
    .li:hover{
        color: rgb(0, 0, 168);
    }
    h2{
        font-size:1.4rem;
        text-align:center;
    }
}
.carouselCont{
    position: relative;
}
.schoolName{
 position: absolute;
top: 0;
left: 0;
 width: 100%;
 height: 100%;
 padding: 30px;
 text-align: center;
 display: flex;
 justify-content: center;
 align-items: center;
 color: #fff;
 font-size: 5vw;
 z-index: 5;
 background-color: rgba(0, 0, 0, 0.522);
 
}


@media(max-width:700px){
    .infoCont{
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30px;
        flex-wrap:wrap;
    }
    .infoCont .mission, .new-info{
        width:80%;
    }
}
@media(max-width:380px){
    .infoCont .mission, .new-info{
        min-width: 100px;
        font-size:0.8rem;
        flex-wrap:wrap;
        padding:5px;
        
        h2{
            font-size:1.2rem;
        }
    }
    .carouselCont{
        h1{
            font-size:5vw;
        }
    }
}

`;

export default Home
