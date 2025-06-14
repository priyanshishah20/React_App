import React from 'react'
import { useState, useEffect } from 'react';

const Counter = () => {
  // let counter = 0;
  // function counterFun() {
  //   counter++;
  //   console.log(counter);
  // }

  const [counter, setCounter] = useState(0);

  function IncCounter() {
    if(counter < 20) {
      setCounter(counter + 1);
    }
  }
  function DecCounter() {
    if(counter > 0) {
      setCounter(counter - 1);
    }
  }

  useEffect(() => {
    //document.title = counter;
    console.log('useEffect is running.');
  }, [counter]);

  const [details, setdetails] = useState({
    framework: 'React',
    version: '19.1.2',
  });

  return (
    <>
      <h2>useState and useEffect</h2>
      <div>{counter}</div>
      <button className="btn asc-btn" onClick={IncCounter}>Increase</button>
      <button className='btn dec-btn' onClick={DecCounter}>Decrease</button>

      <h4 style={{ marginBottom: '5px' }}>Object using useState</h4>
      <div>Framework: {details.framework}, Version: {details.version}</div>
    </>
  )
}

export default Counter