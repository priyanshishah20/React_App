import React, { useContext } from 'react'
import MoneyContext from '../Context/MoneyContext'

const People = () => {
  //console.log(useContext(MoneyContext));
  const data = useContext(MoneyContext)
  return (
    <>
    <div>People Component</div>
    <div>People: {data.name}, Money = {data.money}, Counter = {data.counter} </div>
    <button className='btn' style={{margin:'5px'}} onClick={()=>data.setCounter(data.counter+1) }>Increase</button>
    </>
  )
}

export default People