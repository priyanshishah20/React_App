import React from 'react'
import { Link } from 'react-router-dom';

const Product = () => {
  const arr = [
    {id:'R1263', course_name:'React.JS', price: 18000, duration: '5 months'},
    {id:'F2812', course_name:'Frontend', price: 10000, duration: '5 months'},
    {id:'J3579', course_name:'Java Full Stack', price: 15000, duration: '5 months'},
    {id:'B4962', course_name:'Backend', price: 12000, duration: '5 months'},
  ];

  return (
    <>
    <h2>Course Section</h2>
    <div>
      <ul>
        {arr.map((data)=> <li key={data.id}>
          <Link to={`/courses/${data.id}`}>{data.course_name}</Link>
        </li>)}
      </ul>
    </div>
    </>
  )
}

export default Product