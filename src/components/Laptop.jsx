import React from 'react'
import './laptop.css'

const Laptop = ({ brand, price }) => {

  // Internal Styling
  const internalStyle = {
    backgroundColor: '#1a1c1e',
    padding: '10px',
    margin: '20px 0',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '50%',
  };

  return (
    <>
      {/* Inline Styling */}
      {/* <div style={{
        backgroundColor: '#1a1c1e',
        padding: '10px', margin: '20px 0',
        border: '1px solid #ccc', borderRadius: '5px',
        width: '50%'
      }}> */}

      {/* Internal Styling */}
      {/* <div style={internalStyle}> */}
      
      {/* External Styling */}
      <div className='table-container'>
        <div>Laptop Brand: {brand}</div>
        <div>Laptop Price: {price}</div>
      </div>
    </>
  )
}

export default Laptop