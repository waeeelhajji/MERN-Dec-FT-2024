import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Base_URL = "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/"


const Hero = () => {

    const [hero, setHero] = useState(null)

    // ~ Consuming Parameter in the Path 
    const { id } = useParams()
    // ~ Navigation Hook
    const nav = useNavigate()
    // console.log(id)

    useEffect(() => {
        axios.get(Base_URL + id + ".json")
            .then((res) => {
                console.log(res.data)
                setHero(res.data)
            })
            .catch((err) => {
                console.log(err)
                nav("/Error" + 5)
            })

    }, [])




    return (
        <fieldset>
            <legend>Hero.jsx</legend>
            {id}
            {
                hero ? <>
                    <h2>{hero.name}</h2>
                    <img src={hero.images.sm} alt={hero.name} />
                </> : <p>Loading ...</p>
            }

        </fieldset>
    )
}

export default Hero