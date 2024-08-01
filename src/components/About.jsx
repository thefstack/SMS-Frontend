import React from 'react'
import styled from 'styled-components'

const About = () => {
  return (
    <Wrapper id='about-section' >
      <div className='about-section'><h1 className='heading'>About R S Memorial <span className='sec-color'>School</span></h1>
      <div>
        <h1>Introduction</h1>
        <p>R S Memorial School, under the esteemed Rajendra sharma memorial educational and development society, is dedicated to nurturing the minds and hearts of our students. <br /> Located in sonho saran, we strive to create a stimulating and inclusive environment where every child is encouraged to reach their full potential. <br /> Our commitment to providing quality education at an affordable cost ensures that every child has access to learning opportunities regardless of their financial background.</p>
      </div>
      <div>
        <h1>Our <span className='sec-color'>Vision</span></h1>
        <p>We envision a future where our students are empowered with the knowledge, skills, and values necessary to thrive in a rapidly changing world. <br /> Our goal is to cultivate leaders who are compassionate, innovative, and committed to making a positive impact on society.</p>
      </div>
      <div className="values">
        <h1>Our <span className='sec-color'>Values</span></h1>
        <p>
          <li><b>Excellence</b>: We  encourage students to strive for their best in all endeavors.</li>
          <li><b>Integrity</b>: We promote honesty, respect, and responsibility, ensuring a foundation of trust and ethical behavior.</li>
          <li><b>Inclusivity</b>: We embrace diversity and foster an environment where every student feels valued and supported.</li>
          <li><b>Community</b>: We build strong partnerships with families and the broader community, creating a collaborative and supportive network for our students.</li>
        </p>
      </div>
      <div className="affordable">
        <h1>Affordable <span className='sec-color'>Fee Structure</span></h1>
        <p>We believe that every child deserves access to quality education without financial strain. <br />Our affordable fee structure is designed to ensure that education is accessible to all families, reflecting our commitment to inclusivity and social responsibility. <br /> By keeping our fees low, we aim to provide exceptional educational experiences to a diverse student body.</p>
      </div>
      <div className="history">
        <h1>History</h1>
        <p>Founded in 2017 by Alok Sharma under the auspices of Rajendra Sharma Memorial Educational and Development Society, R S Memorial School has a rich history of academic and extracurricular achievements. <br /> Over the years, we have grown from a small community school to a renowned institution known for its dedication to holistic education and student success.</p>
      </div>
      <div className="community">
        <h1>Community and <spa className="sec-color">Parent Involvement</spa></h1>
        <p>We believe that education is a collaborative effort between the school, students, parents, and the community. <br /> We actively encourage parent involvement and maintain open lines of communication to ensure that we work together to support our students' growth and development. <br /> Our community programs and events foster a sense of belonging and partnership, strengthening the bond between school and home.</p>
      </div>
      <div className="conclusion">
      <p>At R S Memorial School, we are dedicated to shaping the future by nurturing the leaders of tomorrow. Under the guidance of our Principal, and with our commitment to maintaining an affordable fee structure, we invite you to join our vibrant and supportive community, where every child is inspired to dream, learn, and achieve.</p>
      </div></div>
    </Wrapper>
  )
}

const Wrapper=styled.div`

.sec-color{
    color:#fb9a4b;
}

.about-section{
  display:flex;
width:100%;
padding:30px 40px 50px 40px;
flex-direction:column;
justify-content:center;
align-items:center;
background:#FAE6D5;
margin-top:20px;
    gap: 30px;
    cursor: default;
    div{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 10px;
        background-color: #FBF2EA;
        padding: 10px 20px;
        border-radius: 10px;
        border:2px solid #f98629a9;
        box-shadow: 5px 5px #f98629a9;
    }
    .heading{
    text-align: center;
}
    
}

@media(max-width:350px){
  .about-section{
    div{
      h1{
        text-align:center;
      }
    }
  }
}
.conclusion {
    background-color: #FFD700; 
    border: 2px solid #DAA520;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    font-size: 1rem;
    font-weight: bold;
    color: #333;
    transition: transform 0.3s ease, background-color 0.3s ease;
    &:hover {
      transform: scale(1.05);
      background-color: #FFE135;
    }
  }

`;

export default About
