import React, { useState } from 'react'
import MoneyContext from './MoneyContext'
const MoneyState = (props) => {
    const money = 1000;
    const name = 'Priyanshi';
    const [counter, setCounter] = useState(0)
    return (
        <MoneyContext.Provider 
        value={{ money, counter, setCounter, name }}>{props.children}</MoneyContext.Provider>
    )
}

export default MoneyState
