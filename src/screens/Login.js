import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="email">email</label>
      <input
        value={email}
        type="email"
        placeholder="youremail@gmail.com"
        id="email"
        name="email"
      />
      <label htmlFor="password">password</label>
      <input
        value={pass}
        type="password"
        placeholder="********"
        id="password"
        name="password"
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
