import React, { useEffect, useState } from 'react'
import { Link, useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import "../common.css";
import studentIcon from "../icon/student.png";
import teacherIcon from "../icon/teacher.png";
import classIcon from "../icon/class.png";
import subjectIcon from "../icon/subject.png";
import attendanceIcon from "../icon/attendance.png";
import settingIcon from "../icon/setting.png";
import homeIcon from "../icon/home.png"
import { AnimatePresence, motion } from 'framer-motion';
import {useUserContext} from "../Context/userContext"


const AdminHeader = () => {
    const [isMenu,setIsMenu]=useState(true);
    const {logout, }=useUserContext();
    const navigate=useNavigate()

    const handleSize=()=>{
        if(window.innerWidth>700){
            setIsMenu(true)
        }
        else{
            setIsMenu(false)
        }
    }
    const handleLogout=()=>{
        logout();
        navigate("/")
        
    }
    
    const transition={ duration:0.5,type:"tween"};
    const variant1={
        hide:{
            x:-100,
            opacity:0,
        },
        show:{
            x:0,
            opacity:1,
        }
    }

    useEffect(()=>{
        handleSize()
        window.addEventListener("resize",handleSize)
        
        return ()=> window.addEventListener("resize",handleSize)
    },[])
  return (
    <Wrapper>
     <AnimatePresence>
     {isMenu ? <motion.div 
     key="menu"
      transition={transition} 
      animate="show"
      initial="hide" 
      exit="hide"
      variants={variant1} 
      className='header'>
        <nav className='nav'>
        <Link className='link' to="/admin">Home</Link>
            <Link className='link' to="/admin/student">Students</Link>
            <Link className='link' to="/admin/teacher">Teachers</Link>
            <Link className='link' to="/admin/subject">Subjects</Link>
            <Link className='link' to="/admin/class">Classes</Link>
            <Link className='link' to="/admin/attendance">Attendance</Link>
            <Link className='link' to="/admin/user">Users</Link>
        </nav>
        <div className="setting">
            <Link className='setting-link' onClick={handleLogout}>Logout</Link>
            <Link className='setting-link' to="/admin/faq">FAQ</Link>
        </div>
      </motion.div> 
      :
       <motion.div 
       key="menuSm"
       transition={transition} 
       animate="show"
       initial="hide"
       exit="hide"
       variants={variant1} 
       className='headerSm'>
        <nav className='nav'>
            <Link className='link' to="/admin"><img src={homeIcon} alt="student" /></Link>
            <Link className='link' to="/admin/student"><img src={studentIcon} alt="student" /></Link>
            <Link className='link' to="/admin/teacher"><img src={teacherIcon} alt="teacher" /></Link>
            <Link className='link' to="/admin/subject"><img src={subjectIcon} alt="subject" /></Link>
            <Link className='link' to="/admin/class"><img src={classIcon} alt="class" /></Link>
            <Link className='link' to="/admin/attendance"><img src={attendanceIcon} alt="attendance" /></Link>
            <Link className='link' to="/admin/user"><img src={settingIcon} alt="setting" /></Link>
        </nav>
        <div className="setting">
            <Link className='setting-link' onClick={handleLogout}>Logout</Link>
            <Link className='setting-link' to="/admin/faq">FAQ</Link>
        </div>
      </motion.div>}
     </AnimatePresence>
    </Wrapper>
  )
}

const Wrapper=styled.div`
display:flex;
background-color:#f7d5b86c;
height:100%;
.header{
    display: flex;
    flex-direction: column;
    padding: 50px 20px 80px 20px;
    width:fit-content;
    background-color: #ed9c5bc6;
    justify-content: space-between;
    gap:100px;

    .nav{
        display: flex;
        flex-direction: column;
        height: 100%;
        gap: 20px;

        .link{
            text-decoration: none;
            color:#fff;
            font-weight: 400;
            transition: 0.5s;
            
        }
    }
    .setting{
        display:flex;
        flex-direction:column;
        gap:10px;
    }
    .setting-link{
        text-decoration: none;
            color:#fff;
            font-weight: 400;
            transition: 0.5s;
    }
}

.headerSm{
    display: flex;
    flex-direction: column;
    padding: 50px 20px 80px 20px;
    width:fit-content;
    background-color: #ed9c5bc6;
    justify-content: space-between;
    gap:100px;

    .nav{
        display: flex;
        flex-direction: column;
        height: 100%;
        gap: 20px;

        .link{
            img{
                width:20px;
            }           
        }
    }
    .setting{
        margin-bottom:50px;

    }
    .setting-link{
        text-decoration: none;
            color:#fff;
            font-weight: 400;
            transition: 0.5s;
            margin-bottom:200px;
    }
}
@media(max-width:550px){
    .headerSm{
        padding: 50px 10px;
    }
    .setting{
        display:flex;
        flex-direction:column;
    }
}

`;

export default AdminHeader
