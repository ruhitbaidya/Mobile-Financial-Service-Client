const Users = ({ data }) => {
  console.log(data);
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
              {data?.map((item) => (
                <tr key={item._id}>
                  <th></th>
                  <th>{item.name}</th>
                  <th>{item.email || item.phone}</th>
                  <th>
                    <select className="select select-bordered w-full max-w-xs">
                      <option disabled selected>
                        --Select--
                      </option>
                      <option>Agent</option>
                      <option>User</option>
                    </select>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
