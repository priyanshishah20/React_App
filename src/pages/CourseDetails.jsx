import React from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'

const CourseDetails = () => {
  //console.log(useParams());
  //console.log(useLocation());
  const { id } = useParams();
  const location = useLocation();

  const arr = [
    { id: 'R1263', course_name: 'React.JS', price: 18000, duration: '5 months' },
    { id: 'F2812', course_name: 'Frontend', price: 10000, duration: '5 months' },
    { id: 'J3579', course_name: 'Java Full Stack', price: 15000, duration: '5 months' },
    { id: 'B4962', course_name: 'Backend', price: 12000, duration: '5 months' },
  ];

  const course_details = arr.filter((data) => data.id == id);

  return (
    <>
      <p>Approach 1 with filter</p>
      <div>Course ID: {course_details[0].id}</div>
      <div>Course Name: {course_details[0].course_name}</div>
      {location.pathname != `/courses/${course_details[0].id}` && <>
      <div>Course Price: {course_details[0].price}</div>
      <div>Course Duration: {course_details[0].duration}</div>
      </>}

      <p>Approach 2 with map</p>
      {course_details.map((data) => <div key={data.id}>
        <p>{data.id}</p>
        <div>Course ID: {data.id}</div>
        <div>Course Name: {data.course_name}</div>
        {location.pathname != `/courses/${data.id}` && <>
        <div>Course Price: {data.price}</div>
        <div>Course Duration: {data.duration}</div>
        </>}
      </div>)}

      <div style={{marginTop:'16px'}}>
        <button className='btn'><Link to="/courses">Back to Courses</Link></button>
      </div>
    </>
  )
}

export default CourseDetails