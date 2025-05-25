import React from 'react'

const Ternary = ({name, age, price}) => {
  return (
    <>
    <h2>Ternary Operator</h2>
    <div>Name: {name}</div>
    <div>{(age>18) ? ('You are eligible') : ('You are not eligible')}</div>
    <div>{(price == 100) && 'You can purchase phone'}</div>
    </>
  )
}

export default Ternary