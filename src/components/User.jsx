import React, { useContext } from "react";
import { ACTIONS, userContext } from "./UserProvider";

const User = ({ user }) => {
  const { dispatch } = useContext(userContext);
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>
        <button
          onClick={() => dispatch({ type: ACTIONS.E, payload: user })}
          className="btn btn-primary btn-sm mr-2"
        >
          Edit
        </button>
        <button
          onClick={() => dispatch({ type: ACTIONS.D, payload: user.id })}
          className="btn btn-primary btn-sm mr-2"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default User;
