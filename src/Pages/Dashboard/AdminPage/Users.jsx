import axios from "axios";
import { useEffect, useState } from "react";

const Users = ({ data }) => {
  const [roleManage, SetRoleManage] = useState("");
  const [idManage, SetidManage] = useState("");
  const token = localStorage.getItem("token");
  console.log(data);
  const controlRole = (text) => {
    SetRoleManage(text);
  };
  const handelAprove = (id) => {
    SetidManage(id);
  };
  useEffect(() => {
    axios
      .post(`http://localhost:5000/changeRole/${idManage}/${roleManage}`, { token })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, [idManage, roleManage, token]);
  console.log(roleManage, idManage);
  if (data.status === false || data.length === 0) {
    return <p>Loading.....</p>;
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
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data ? (
                data?.map((item) => (
                  <tr key={item._id}>
                    <th></th>
                    <th>{item.name}</th>
                    <th>{item.email || item.phone}</th>
                    <th>{item.status}</th>
                    <th>
                      <select
                        onChange={(e) => {
                          handelAprove(item._id);
                          controlRole(e.target.value);
                        }}
                        className="select select-bordered w-full max-w-xs"
                      >
                        <option disabled selected>
                          --Select--
                        </option>
                        <option value="agent">Agent</option>
                        <option value="user">User</option>
                      </select>
                    </th>
                  </tr>
                ))
              ) : (
                <p>Loading.....</p>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
