import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from "react-router-dom"

const Home = () => {
    //~state
    const [cakes, setCakes] = useState([])

    //~useEffect
    useEffect(() => {
        //~ Fetch data
        axios.get("http://localhost:5000/api/cake/")
            .then(res => {
                console.log(res.data)
                //~ Insert the Data in State
                setCakes(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    const DeleteCake = (cakeId) => {
        axios.delete("http://localhost:5000/api/cake/" + cakeId)
            .then(res => {
                console.log(res.data)
                const filtredCakes = cakes.filter((cake) => {
                    return cake._id !== cakeId
                })
                setCakes(filtredCakes)
            })
            .catch(err => console.log(err))
    }





    return (
        <div>
            <table>
                {/* ~display our data in the DOM */}

                <thead>
                    <tr>
                        <th>
                            name
                        </th>
                        <th>
                            imgUrl
                        </th>
                        <th>
                            layers
                        </th>
                        <th>
                            Frosting
                        </th>
                        <th>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cakes.map((cake) => {
                            return <tr key={cake._id}>
                                <td>
                                    <Link to={"/cake/" + cake._id}>
                                        {cake.name}
                                    </Link>
                                </td>
                                <td>
                                    <img src={cake.imgUrl} alt={cake.name} height="100" />
                                </td>
                                <td>
                                    {cake.layers}
                                </td>
                                <td>
                                    {cake.hasFrosting ? "✅" : "❌"}
                                </td>
                                <td><button onClick={() => DeleteCake(cake._id)}>Delete</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>


        </div >
    )
}

export default Home