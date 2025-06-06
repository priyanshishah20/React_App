import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  //console.log(useNavigate());
  const navigate = useNavigate();

  const toHome = ()=> {
    navigate('/');
  }
  const goBack = ()=> {
    navigate(-1); // this will navigate to the previous page
  }
  return (
    <div>
      <button onClick={toHome} className='btn'>Go To Home</button>
      <button onClick={goBack} className='btn asc-btn'>Go Back</button>
    </div>
  )
}

export default About