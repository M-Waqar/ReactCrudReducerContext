import React from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import UserProvider from "./components/UserProvider";

function App() {
  return (
    <UserProvider>
      <div className="container">
        <div className="mt-5 mb-5 p-5 bg-primary text-light">
          <h1 className="text-center">User Management With Context</h1>
        </div>
        <div className="row">
          <div className="col-5">
            <UserForm />
          </div>
          <div className="col-7">
            <UserList />
          </div>
        </div>
      </div>
    </UserProvider>
  );
}

export default App;
