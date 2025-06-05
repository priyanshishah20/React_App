import Admin from './Admin'
import { Test } from './Test' // rafc
import Product from './Product'
import Ternary from './Ternary'
import Laptop from './Laptop'
import Events from './Events'
import Counter from './Counter'
import ShowProduct from './ShowProduct'
import FilterProduct from './FilterProduct'
import FetchDataApi from './FetchDataApi'
import Form from './Form'
import MultiInput from './MultiInput'

// These are the learning components and the files were imported on App.jsx
// not using as implementing react router dom

const Learning = () => {

  return (
    <>
      <h1>Learning React</h1>
      <p className='comp'>React Components</p>
      <Admin />
      <br />
      <Test />
      <br />

      {/* Product */}
      <div>
        <h2>Reusable Components with props</h2>
        <Product phone="Galaxy S21 FE 5G" brand="Samsung" price={50000} />
        <Product phone="Redmi Note 13" brand="Redmi" price={50000} />
      </div>

      {/* Ternary */}
      <Ternary name="Priyanshi" age={20} price={100} />

      {/* Laptop */}
      <div>
        <h2>CSS Styling</h2>
        <Laptop brand="HP Laptop" price={51000} />
        <Laptop brand="Lenovo laptop" price={51000} />
      </div>

      {/* Events */}
      <div>
        <Events />
      </div>

      {/* UseState */}
      <Counter />

      {/* Map */}
      <ShowProduct/>

      {/* Filter */}
      <FilterProduct/>

      {/* Fetch data from API */}
      <FetchDataApi/>

      {/* Form */}
      <Form/>

      {/* Multiple Input Form */}
      <MultiInput/>
    </>
  )
}

export default Learning