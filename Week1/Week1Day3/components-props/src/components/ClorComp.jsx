import React from 'react'

const ClorComp = (props) => {
    const { color } = props
    return (
        <div style={{ backgroundColor: color }}>ClorComp</div>
    )
}

export default ClorComp