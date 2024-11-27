import React from 'react'

const Events = () => {
    return (
        <fieldset>
            <h5>Evenst</h5>
            <button onClick={() => alert("Hello From ")} >Click Me Plz</button>
            <br />
            <input type="text" onChange={(e) => console.log(e.target.value)} />




        </fieldset>
    )
}

export default Events