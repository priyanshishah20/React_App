import React from 'react'

const ShowProduct = () => {

    let product = [
        {id:'101', productName:'Samsung S21', price:'40000'},
        {id:'102', productName:'Redmi Note', price:'24000'},
        {id:'103', productName:'Moto G21', price:'14000'},
        {id:'104', productName:'Iphone 18', price:'49000'},
    ];

  return (
    <>
    <h2>Map Method <span>(ShowProducts)</span></h2>

    {product.map((data) => <div key={data.id}>
        <p>Product: {data.productName}, Price: {data.price}</p>
    </div>)}
    </>
  )
}

export default ShowProduct