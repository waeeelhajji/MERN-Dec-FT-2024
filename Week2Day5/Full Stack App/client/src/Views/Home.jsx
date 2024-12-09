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
                            </tr>
                        })
                    }
                </tbody>
            </table>


        </div >
    )
}

export default Home