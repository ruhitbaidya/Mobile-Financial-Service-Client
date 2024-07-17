import axios from "axios"
import { createContext, useEffect, useState } from "react"

export const userContext = createContext(null)

 const UserAuth = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [users, setUsers] = useState(false)
    const token = localStorage.getItem("token");
    // console.log(token)
    useEffect(()=>{
      axios.post("http://localhost:5000/verifyToken", {token})
    .then((res)=> {
        setUsers(res.data)
        setLoading(false)
    })
    .catch((err)=> console.log(err))
    }, [])
    console.log(users, loading)
    const info = {loading, setUsers, users, setLoading}
  return (
    <userContext.Provider value={info}>
        {children}
    </userContext.Provider>
  )
}

export default UserAuth