import React from 'react'

const Events = () => {
    const handleEvent = (val) => {
        alert(`You ${val} the button.`);
    }
  return (
    <>
    <h2>Event Handling</h2>
    <button onClick={() => handleEvent('clicked')} className='btn'>Click me!</button>
    <button onMouseOver={() => handleEvent('hover')} className='btn'>Hover me!</button>
    </>
  )
}

export default Events