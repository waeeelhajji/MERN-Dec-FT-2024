import React, { useState } from 'react'
import axios from "axios"

const Form = () => {
    const [name, setName] = useState("")
    const [imgUrl, setImageUrl] = useState("")
    const [layers, setLayers] = useState(2)
    const [hasFrosting, setHasFrosting] = useState(false)

    const [ErrorHandler, setErrorHandler] = useState({})

    const SubmitHandler = (e) => {
        e.preventDefault()

        const ourNwCake = {
            name,
            imgUrl,
            layers,
            hasFrosting
        }
        setImageUrl("")
        setName("")
        setLayers(2)
        setHasFrosting(false)


        axios.post("http://localhost:5000/api/cake/", ourNwCake)
            .then(res => {
                console.log("✅✅✅", res.data)
            })
            .catch(err => {
                console.log("❌❌❌", err.response.data.errors)
                setErrorHandler(err.response.data.errors)
            })

    }







    return (
        <div>
            <h1>Create new Cake</h1>
            <form onSubmit={SubmitHandler}>
                name : {JSON.stringify(name)} <br />
                imgUrl : {JSON.stringify(imgUrl)}<br />
                layers : {JSON.stringify(layers)}<br />
                hasFrosting : {JSON.stringify(hasFrosting)}<br />
                <div>
                    name:
                    <input value={name} onChange={e => setName(e.target.value)} />
                    {ErrorHandler.name && <p>{ErrorHandler.name.message}</p>}
                </div>
                <div>
                    Image for the Cake:
                    <input value={imgUrl} onChange={e => setImageUrl(e.target.value)} required />
                    {ErrorHandler.imgUrl && <p>{ErrorHandler.imgUrl.message}</p>}
                </div>
                <div>
                    How many Layers do the cake have:
                    <input value={layers} type="number" onChange={e => setLayers(e.target.value)} />
                    {ErrorHandler.layers && <p>{ErrorHandler.layers.message}</p>}
                </div>
                <div>
                    has frosting:
                    <input type="checkbox" checked={hasFrosting} onChange={e => setHasFrosting(e.target.checked)} />
                </div>
                <button>Add Cake</button>
            </form>
        </div>
    )
}

export default Form