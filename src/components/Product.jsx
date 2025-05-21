import React from 'react'

// props
const Product = ({phone, brand, price, ram}) => {
  return (
    <div>
        <p>Phone: {phone}</p>
        <p>Brand: {brand}</p>
        <p>Price: {price}</p>
        <p>ram: {ram}</p>
    </div>
  )
}

export default Product