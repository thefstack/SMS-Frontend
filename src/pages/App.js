import React, { useState } from 'react'
import styled from "styled-components"
import "../common.css"
import Header from '../components/Header';
import Home from "../components/Home"
import {motion, useScroll, useMotionValueEvent} from "framer-motion";
import About from "../components/About"
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Reveal } from '../components/Reveal';



const App = () => {
  const [hideHeader,setHideHeader]=useState(false);
  const {scrollY}= useScroll();
  const var1={
    hide:{
      y:-100
    },
    show:{
      y:0
    },
    opacity0:{
      opacity:0
    },
    opacity1:{
      opacity:1
    }
  }

  useMotionValueEvent(scrollY,"change",(value)=>{
    const previous=scrollY.getPrevious();
    if(value > previous && value>100){
      setHideHeader(true)
    }else{
      setHideHeader(false)
    }
  })
      
  return (
    <Wrapper>
      <motion.div transition={{type:"tween",}} variants={var1} animate={hideHeader ? "hide" :"show"} style={{zIndex:999, height:"60px",backgroundColor:"#ffba82",top:0, position:"sticky"}} ><Header/></motion.div>

      <motion.div variants={var1} initial="opacity0" animate="opacity1" id='home-section' transition={{duration:0.6}}><Home/></motion.div>

      <Reveal width="100%" id='about-section'><About/></Reveal>

      <Reveal width="100%" id='contact-section'><Contact/></Reveal>
      
      <Reveal width="100%"><Footer/></Reveal>

    </Wrapper>
  )
}
const Wrapper= styled.section`
width:100%;
min-width:100vw;
position:relative;
display:flex;
flex-direction:column;

`;

export default App;
