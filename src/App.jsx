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
    <div>
    <h2>Reusable Components with props</h2>
    <Product phone="Galaxy S21 FE 5G" brand="Samsung" price={50000} />
    <Product phone="Redmi Note 13" brand="Redmi" price={50000} />
    </div>
    <br />
    <Ternary name="Priyanshi" age={20} price={100}/>
    
    <div>
    <Laptop brand="HP Laptop" price={51000}/>
    <Laptop brand="Lenovo laptop" price={51000}/>
    </div>
    </>
  )
}

export default App