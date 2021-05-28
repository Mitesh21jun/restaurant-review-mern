import React, { useState } from "react";

const Login = (props) => {
  const initialUserState = {
    name: "",
    id: "",
  };
  const [user, setUser] = useState(initialUserState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const login = () => {
    props.login(user);
    props.history.push("/");
  };

  return (
    <div className="submit-form">
      <div>
        <div className="form-group">
          <label htmlFor="user">Username</label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            onChange={handleInputChange}
            required
            value={user.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="id">ID</label>
          <input
            type="text"
            className="form-control"
            required
            name="id"
            id="id"
            value={user.id}
            onChange={handleInputChange}
          />
        </div>
        <button onClick={login} className="btn btn-success">
          Login
        </button>
      </div>
    </div>
  );
};

// function Login() {
//   return <div className="App"></div>;
// }

export default Login;
