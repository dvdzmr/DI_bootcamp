import {useContext, useEffect, useState} from "react"
import axios from "axios"

import {AuthContext} from "../App"

const Home = () => {
    const [users, setUsers] = useState([])

    const {token} = useContext(AuthContext)

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        try {
            const response = await axios.get('http://localhost:3001/users/', {
                headers: {
                    'x-access-token': token?.token
                },
                withCredentials: true
            })
            setUsers(response.data)
        } catch (error) {
            console.log(error.response.data.message);
        }
    }

    return (
        <>
            <h2>Home</h2>
            {users.map((user) => {
                return <div key={user.id}>{user.id} {user.email}</div>
            })}
        </>
    )
}

export default Home