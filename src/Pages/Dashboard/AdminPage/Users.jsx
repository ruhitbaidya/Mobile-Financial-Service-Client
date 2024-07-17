import axios from "axios";

const Users = ({ data }) => {
    const token = localStorage.getItem("token")
    console.log(data)
  const handelAprove = (e)=>{
        console.log(e.target.value)
        // axios.post(`http://localhost:5000/changeRole/${e.target.value}`, {token})
        // .then((res)=> console.log(res))
        // .catch((err)=> console.log(err))
  }
if(data.status === false || data.length === 0){
    return <p>Loading.....</p>
}
  return (
    <div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data ? data?.map((item) => (
                <tr key={item._id}>
                  <th></th>
                  <th>{item.name}</th>
                  <th>{item.email || item.phone}</th>
                  <th>
                    <select onChange={()=> handelAprove(item._id)} className="select select-bordered w-full max-w-xs">
                      <option disabled selected>
                        --Select--
                      </option>
                      <option value="agent">Agent</option>
                      <option value="user">User</option>
                    </select>
                  </th>
                </tr>
              )) : <p>Loading.....</p>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
