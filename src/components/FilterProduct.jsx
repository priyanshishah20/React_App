import React from 'react'

const FilterProduct = () => {
    let products = [
        {id:'101', productName:'Samsung S21', category:'mobile', price:'40000'},
        {id:'102', productName:'Lenovo', category:'laptop', price:'124000'},
        {id:'103', productName:'Redmi Note', category:'mobile', price:'14000'},
        {id:'104', productName:'HP', category:'laptop', price:'79000'},
        {id:'105', productName:'Sony Camera', category:'camera', price:'179000'},
    ];

    const filteredData = products.filter((data)=> data.category == 'mobile');
    //console.log(filteredData);
  return (
    <>
    <h2>Filter Method <span>(FilterProduct)</span></h2>
    
    {filteredData.map((data) => <div key={data.id}>
        <p>id: {data.id}, product: {data.productName}, category: {data.category}, price: {data.price}</p>
    </div>)}
    </>
  )
}

export default FilterProduct