import React, { createContext, useReducer } from "react";

export const userContext = createContext();

export const ACTIONS = {
  A: "Add user",
  E: "Select Edit User",
  ED: "Actual Edit User",
  D: "Delete User",
};

export const initialUser = {
  id: "",
  name: "",
  email: "",
  phone: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.A:
      return {
        ...state,
        userList: [action.payload, ...state.userList],
        user: initialUser,
      };
    case ACTIONS.E:
      return {
        ...state,
        user: action.payload,
      };
    case ACTIONS.ED:
      return {
        ...state,
        userList: state.userList.map((user) => {
          if (user.id === action.payload.id) {
            return action.payload;
          } else {
            return user;
          }
        }),
        user: initialUser,
      };
    case ACTIONS.D:
      const newlist = state.userList.filter(
        (list) => list.id !== action.payload
      );
      return { ...state, userList: newlist };
    default:
      return state;
  }
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    user: initialUser,
    userList: [],
  });
  return (
    <userContext.Provider value={{ state, dispatch }}>
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
