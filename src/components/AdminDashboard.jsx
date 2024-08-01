import React from 'react'
import styled from 'styled-components'
import InfoCard from './InfoCard'
import { useStudentContext } from '../Context/studentContext';
import { useTeacherContext } from '../Context/teacherContext';
import { useClassContext } from '../Context/classContext';
import { useSubjectContext } from '../Context/subjectContext';
import { useUserContext } from '../Context/userContext';


const AdminDashboard = () => {
    const {studentData}=useStudentContext();
    const {teacherData}=useTeacherContext();
    const {classData}=useClassContext();
    const {subjectData}=useSubjectContext();
    const {userData}=useUserContext();

  return (
    <Wrapper>
      <div className="cont">
      <div className="info-cont">
            <InfoCard heading="Total Students" value={studentData.length}/>
            <InfoCard heading="Total Teachers" value={teacherData.length}/>
            <InfoCard heading="Total Class" value={classData.length}/>
            <InfoCard heading="Total Subjects" value={subjectData.length}/>
            <InfoCard heading="Total Users" value={userData.length}/>
        </div>
        <div className="info-cont">
            <InfoCard heading="Total Students" value={studentData.length}/>
            <InfoCard heading="Total Teachers" value={teacherData.length}/>
            <InfoCard heading="Total Class" value={classData.length}/>
            <InfoCard heading="Total Subjects" value={subjectData.length}/>
            <InfoCard heading="Total Users" value={userData.length}/>

        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper=styled.div`
width:100%;
padding:30px;

.cont{
    display:flex;
    flex-direction:column;
    gap:50px
}

.info-cont{
    display:flex;
    width: 100%;
    justify-content: space-evenly;
    gap: 40px;
    flex-wrap: wrap;
    border-radius: 15px;
    border:1px solid #fb7500;
    box-shadow: 5px 5px 10px #fb75009e;
    padding:30px;
}
.graph-cont{
    display:flex;
    width: 100%;
    height:100%;
    justify-content: space-evenly;
    align-items:center;
    gap: 40px;
    flex-wrap: wrap;
    border-radius: 15px;
    border:1px solid #fb7500;
    box-shadow: 5px 5px 10px #fb75009e;
    padding:30px
}
@media(max-width:400px){
    padding:15px;

    .info-cont{
        padding:40px 10px;
    }
    .graph-cont{
        padding:40px 10px;
    }
}

`;

export default AdminDashboard
