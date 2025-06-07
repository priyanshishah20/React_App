import React from 'react'
import Panchayat from './Panchayat'

const Block = ({money}) => {
  return (
    <>
    <div>Block Component</div>
    <Panchayat money={money} />
    </>
  )
}

export default Block