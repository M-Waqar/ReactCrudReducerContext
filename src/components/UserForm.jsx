import React, { useContext, useState, useEffect } from "react";
import { userContext, ACTIONS, initialUser } from "./UserProvider";
import { v4 as uuidv4 } from "uuid";

const UserForm = () => {
  const {
    state: { user },
    dispatch,
  } = useContext(userContext);

  const [usr, setUsr] = useState(initialUser);

  useEffect(() => {
    setUsr(user);
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usr.id === "") {
      dispatch({ type: ACTIONS.A, payload: { ...usr, id: uuidv4() } });
    } else {
      dispatch({ type: ACTIONS.ED, payload: usr });
    }
    setUsr(initialUser);
  };

  return (
    <div className="shadow border p-5">
      <h1 className="text-center text-primary">Add User</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>User Name</label>
          <input
            value={usr.name}
            onChange={(e) => setUsr({ ...usr, name: e.target.value })}
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>User Email</label>
          <input
            value={usr.email}
            onChange={(e) => setUsr({ ...usr, email: e.target.value })}
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>User Phone</label>
          <input
            value={usr.phone}
            onChange={(e) => setUsr({ ...usr, phone: e.target.value })}
            type="text"
            className="form-control"
          />
        </div>
        <button className="btn btn-primary btn-block">
          {usr.id ? "Edit User" : "Add User"}
        </button>
      </form>
    </div>
  );
};

export default UserForm;
