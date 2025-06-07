import React from 'react'
import District from './District'

const StateGov = ({money}) => {
    return (
        <>
            <div>StateGov Component</div>
            <District money={money} />
        </>
    )
}

export default StateGov