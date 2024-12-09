import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {

    const [name, setName] = useState("")
    const [imgUrl, setImageUrl] = useState("")
    const [layers, setLayers] = useState(2)
    const [hasFrosting, setHasFrosting] = useState(false)

    const [ErrorHandler, setErrorHandler] = useState({})

    const { id } = useParams()
    //! state
    // const [onecake, setOneCake] = useState({})
    const nav = useNavigate()

    useEffect(() => {
        //~ Fetch data
        axios.get("http://localhost:5000/api/cake/" + id)
            .then(res => {
                console.log(res.data)
                //~ Insert the Data in State
                // setOneCake(res.data)
                setImageUrl(res.data.imgUrl)
                setName(res.data.name)
                setLayers(res.data.layers)
                setHasFrosting(res.data.hasFrosting)
            })
            .catch(err => console.log(err))
    }, [])
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


        axios.put("http://localhost:5000/api/cake/" + id, ourNwCake)
            .then(res => {
                console.log("✅✅✅", res.data)
                nav("/")
            })
            .catch(err => {
                console.log("❌❌❌", err.response.data.errors)
                setErrorHandler(err.response.data.errors)
            })

    }
    return (
        <div>
            <h1>Update  Cake</h1>
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
                <button>Update Cake</button>
            </form>
        </div>
    )
}

export default Update