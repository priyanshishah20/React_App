import React from 'react'
import People from './People'

const Panchayat = ({money}) => {
  return (
    <>
    <div>Panchayat Component</div>
    <People money={money} />
    </>
  )
}

export default Panchayat