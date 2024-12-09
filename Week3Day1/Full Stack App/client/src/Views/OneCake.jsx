import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const OneCake = () => {
    const { id } = useParams()
    //! state
    const [onecake, setOneCake] = useState({})

    const nav = useNavigate()
    //! useEffect 
    //~useEffect
    useEffect(() => {
        //~ Fetch data
        axios.get("http://localhost:5000/api/cake/" + id)
            .then(res => {
                console.log(res.data)
                //~ Insert the Data in State
                setOneCake(res.data)
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <div>
            OneCake
            <li>
                {onecake.name}
            </li>
            <li>
                <img src={onecake.imgUrl} alt={onecake.name} height="100" />
            </li>
            <li>
                {onecake.layers}
            </li>
            <li>
                {onecake.hasFrosting ? "✅" : "❌"}
            </li>
            <button onClick={() => nav("/update/" + onecake._id)}>Update</button>


        </div>
    )
}

export default OneCake