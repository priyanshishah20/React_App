import React from 'react'
import { Link } from 'react-router-dom';

const Product = () => {
  const arr = [
    {id:'R1263', course_name:'React.JS', price: 18000},
    {id:'F2812', course_name:'Frontend', price: 10000},
    {id:'J3579', course_name:'Java Full Stack', price: 15000},
    {id:'B4962', course_name:'Backend', price: 12000},
  ];

  return (
    <>
    <div>Product</div>
    <div>
      <ul>
        {arr.map((data)=> <li key={data.id}>
          <link to={`/course/:${data.id}`}>{data.course_name}</link>
        </li>)}
      </ul>
    </div>
    </>
  )
}

export default Product