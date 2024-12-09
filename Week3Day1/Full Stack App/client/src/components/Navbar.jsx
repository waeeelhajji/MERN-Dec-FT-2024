import React from 'react'
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div>
            <Link to="/create">Create</Link>
            <Link to="/">Home</Link>
        </div>
    )
}

export default Navbar