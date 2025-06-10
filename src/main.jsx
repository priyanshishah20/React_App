import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MoneyState from './Context/MoneyState.jsx'

// different way of rendering ReactDOM
createRoot(document.getElementById('root')).render(
  <MoneyState>
    <App />
  </MoneyState>,
)

// const elem = createRoot(document.getElementById('root'));
// elem.render(
//   <MoneyState>
//     <App />
//   </MoneyState>,
// );
