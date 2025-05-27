import Admin from './components/Admin'
import { Test } from './components/Test'
import Product from './components/Product'
import Ternary from './components/Ternary'
import Laptop from './components/Laptop'
import Events from './components/Events'
import Counter from './components/Counter'
import ShowProduct from './components/ShowProduct'
import FilterProduct from './components/FilterProduct'

const App = () => {

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
    </>
  )
}

export default App