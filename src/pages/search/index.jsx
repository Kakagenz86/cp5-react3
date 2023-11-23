import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';
import axios from "axios"

const Users = () => {
    const [users, setUsers] = useState([])
    let [name, setName] = useState("")

    useEffect(() => {
        handleGetUser()
    }, [])

    const handleGetUser = () => {
        axios
        .get(`https://reqres.in/api/users?page=${name}`)
        .then((res) => {
            console.log((res.data.data))
            setUsers(res.data.data)
        })
        .catch((err) => console.log((err)))
    }

    let handleChangeName = (e) => {
        setName(e.target.value)
    }

    let handleSubmit = () => {
        console.log(name)
        handleGetUser()
    }

    return ( 
        <>
        <h1>Ini Halaman User</h1>
        <input onChange={handleChangeName} placeholder='search' />
        <button onClick={handleSubmit}>Submit</button>
        {users.map((user) => (
                        <div>
                        <h1>{user.first_name}</h1>
                        <img src={user.avatar}/>
                        {/* <button><Link to={`/Users/${user.id}`}>Detail</Link></button> */}
                    </div>
        ))}
        </>
    );
}

export default Users;