import Admin from './components/Admin'
import { Test } from './components/Test'
import Product from './components/Product'
import Ternary from './components/Ternary'
import Laptop from './components/Laptop'

const App = () => {

  return (
    <>
    <h1>React Components</h1>
    <Admin />
    <br />
    <Test />
    <br />
    <h2>Reusable Components with props</h2>
    <Product phone="Galaxy S21 FE 5G" brand="Samsung" price={50000} />
    <Product phone="Redmi Note 13" brand="Redmi" price={50000} />
    <br />
    <Ternary name="Priyanshi" age={20} price={100}/>
    <br />
    <Laptop brand="HP Laptop" price={51000}/>
    <br />
    <Laptop brand="Lenovo laptop" price={51000}/>
    </>
  )
}

export default App