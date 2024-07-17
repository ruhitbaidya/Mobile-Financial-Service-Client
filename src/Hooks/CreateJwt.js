import axios from "axios";

const createToken = (info)=>{
    axios.post("http://localhost:5000/createToken", info)
    .then((res)=> {
        if(res.data.token){
            localStorage.setItem("token", res.data.token)
        }
    })
    .catch((err)=> console.log(err))
};

export default createToken