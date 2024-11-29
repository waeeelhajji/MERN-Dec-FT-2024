import React, { useState } from 'react'

const Form = ({ addNewUniverse }) => {

    const [name, setName] = useState("")
    const [system, setSystem] = useState("")
    const [orbits, setOrbits] = useState(0)
    const [orbitsError, setOrbitsError] = useState(false);

    const SubmitHandler = (e) => {
        e.preventDefault()

        const neObj = {
            name,
            system,
            orbits
        }
        // console.log(neObj)
        //~ update state
        addNewUniverse(neObj)
        //~ clear state
        setName("");
        setSystem("");
        setOrbits(0);

    }
    const checkOrbits = (e) => {
        let orbitsSpin = e.target.value;
        setOrbits(orbitsSpin); //! STATE IS ASYNC!!
        if (orbitsSpin > 9000) {
            setOrbitsError(true);
        } else {
            setOrbitsError(false);
        }
    };


    return (
        <fieldset>
            name: {JSON.stringify(name)} <br />
            system:  {JSON.stringify(system)} <br />
            orbits: {JSON.stringify(orbits)}
            <legend>Form.jsx</legend>
            <h3>create a planet!</h3>
            <form onSubmit={SubmitHandler}>
                name odf the Planet :<input value={name} type="text" name="name" onChange={(e) => setName(e.target.value)} /><br />
                System Name :<input value={system} type="text" name="system" onChange={(e) => setSystem(e.target.value)} /><br />
                Orbits : <input value={orbits} type="number" name="orbits" onChange={(e) => setOrbits(e.target.value)} /> <br />
                Orbits with Validation : <input value={orbits} type="number" name="orbits" onChange={checkOrbits} /> <br />
                {orbitsError ? <p>WOW!!! too many spins!!</p> : <p>you're too weak!</p>}
                <button>Add Planet</button>
            </form>
        </fieldset>
    )
}

export default Form