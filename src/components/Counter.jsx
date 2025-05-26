import React from 'react'

const Counter = () => {
    let counter = 0;
    function counterFun() {
     counter++;
     console.log(counter);
    }
    return (
    <>
    <h2>usestate</h2>
    <div>{counter}</div>
    <button className="btn asc-btn" onClick={counterFun}>Increase</button>
    <button className='btn dec-btn'>Decrease</button>
    </>
  )
}

export default Counter