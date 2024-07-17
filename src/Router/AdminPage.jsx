import { useContext } from "react"
import { userContext } from "../UserAuth/UserAuth"
import { Navigate } from "react-router-dom";


const AdminPage = ({children}) => {
    const {users, loading} = useContext(userContext);
    console.log(users, loading)
    if(loading === true){
        return <div className="flex justify-center items-center h-screen">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }
    if(users.data.status === 'pending'){
        return <div className="flex justify-center items-center h-screen">
            <p className="text-4xl font-[600] text-center">Wait For Admin Approved Loading.......<span className="loading loading-ring loading-md"></span></p>
        </div>
    }
    if(users.data.status === "admin"){
        console.log("user")
        return children
    }

    return <Navigate to="/" />
 
}

export default AdminPage