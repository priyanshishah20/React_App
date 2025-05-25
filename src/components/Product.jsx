import React from 'react'

// props
const Product = ({phone, brand, price}) => {
  return (
    <div>
        <p>Phone: {phone}</p>
        <p>Brand: {brand}</p>
        <p>Price: {price}</p>
    </div>
  )
}

export default Product