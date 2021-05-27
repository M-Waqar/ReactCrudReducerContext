import React, { useContext } from "react";
import User from "./User";
import { userContext } from "./UserProvider";

const UserList = () => {
  const {
    state: { userList },
  } = useContext(userContext);
  console.log(userList);
  return (
    <div className="shadow border p-1">
      <h1 className="mt-5 text-center text-primary">User List</h1>
      {userList && userList.length > 0 ? (
        <div>
          <table className="table table-bordered">
            <thead className="text-center bg-primary text-light">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {userList.map((user) => (
                <User key={user.id} user={user} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center">No Users Found</div>
      )}
    </div>
  );
};

export default UserList;
