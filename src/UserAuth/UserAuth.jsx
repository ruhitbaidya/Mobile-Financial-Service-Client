import { createContext } from "react"

export const userContext = createContext(null)

 const UserAuth = ({children}) => {
    const info = {name : "ruhit baidya"}
  return (
    <userContext.Provider value={info}>
        {children}
    </userContext.Provider>
  )
}

export default UserAuth