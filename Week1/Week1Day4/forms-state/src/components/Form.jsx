import React, { useState } from 'react'

const animals = ["🐴", "🦁", "🐅"]

const Form = () => {
    //? CREATE STATE FOR THIS COMPONENT
    //!      State 
    //!       !  Change state
    //!      V      V            default state
    const [zoo, setZoo] = useState(animals)
    //! CREATE STATE VARS for this component / for the inputs
    const [animal, setAnimal] = useState("")



    const SubmitHandler = (e) => {
        //! prevent the refresh of the page
        e.preventDefault()
        //!----------------------
        const copyZoo = [...zoo]
        copyZoo.push(animal)
        setZoo(copyZoo)
        //~ setZoo([...zoo, animal])
        setAnimal("")

    }


    return (
        <fieldset>
            <legend>Form </legend>
            My Zoo : {JSON.stringify(zoo)} <br />
            Animal : {JSON.stringify(animal)}
            {/*
            //!      Event for the submit
            //!       !     Function of the submit
            //!      V          V            default state 
        */}<form onSubmit={SubmitHandler}>
                <label>Add animal to the Zoo :</label>
                <p></p>
                <input onChange={(e) => { setAnimal(e.target.value) }} value={animal} />
                <button>Submit</button>
            </form>

        </fieldset>
    )
}

export default Form