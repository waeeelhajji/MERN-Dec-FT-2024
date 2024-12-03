import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <fieldset>
            <legend>Navbar component</legend>
            <Link to="/cool">Go to Cool</Link>
            <Link to="/home">Go to Home</Link>
            <Link to="/hero">Go to Hero</Link>
        </fieldset>
    )
}

export default Navbar