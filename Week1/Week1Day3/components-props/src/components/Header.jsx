import React from 'react'

const Header = (props) => {
    const { MyData, hi } = props
    return (
        <fieldset>
            <legend> Header.jsx</legend>
            <h4>{JSON.stringify(MyData)}</h4>
        </fieldset>
    )
}

export default Header