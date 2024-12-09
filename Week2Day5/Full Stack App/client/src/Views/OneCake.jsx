import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const OneCake = () => {
    const { id } = useParams()
    //! state
    const [onecake, setOneCake] = useState({})
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


        </div>
    )
}

export default OneCake